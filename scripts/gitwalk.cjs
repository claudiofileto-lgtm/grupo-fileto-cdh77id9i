/* eslint-disable */
const fs = require('fs')
const path = require('path')
const zlib = require('zlib')

const gitDir = path.resolve('/repo/.git')

function objPath(sha) {
  return path.join(gitDir, 'objects', sha.slice(0, 2), sha.slice(2))
}

function readObj(sha) {
  const p = objPath(sha)
  let raw
  try {
    raw = fs.readFileSync(p)
  } catch (e) {
    return null
  }
  let buf
  try {
    buf = zlib.inflateSync(raw)
  } catch (e) {
    return null
  }
  const nul = buf.indexOf(0)
  if (nul < 0) return null
  const header = buf.slice(0, nul).toString('utf8')
  const space = header.indexOf(' ')
  const type = header.slice(0, space)
  const content = buf.slice(nul + 1)
  return { type, content }
}

function parseTree(content) {
  const entries = []
  let i = 0
  while (i < content.length) {
    const sp = content.indexOf(0x20, i)
    const mode = content.slice(i, sp).toString('utf8')
    const nul = content.indexOf(0, sp + 1)
    const name = content.slice(sp + 1, nul).toString('utf8')
    const sha = content.slice(nul + 1, nul + 21).toString('hex')
    entries.push({ mode, name, sha })
    i = nul + 21
  }
  return entries
}

function parseCommit(content) {
  const text = content.toString('utf8')
  const lines = text.split('\n')
  const out = { tree: null, parents: [], subject: '', body: '' }
  let inMsg = false
  for (const line of lines) {
    if (inMsg) {
      out.body += line + '\n'
      continue
    }
    if (line === '') {
      inMsg = true
      continue
    }
    if (line.startsWith('tree ')) out.tree = line.slice(5)
    else if (line.startsWith('parent ')) out.parents.push(line.slice(7))
    else if (line.startsWith('author ')) out.author = line.slice(7)
    else if (line.startsWith('committer ')) out.committer = line.slice(10)
  }
  const bodyLines = out.body.split('\n').filter((l) => l.length > 0)
  out.subject = bodyLines[0] || ''
  return out
}

function findInTree(treeSha, parts) {
  const obj = readObj(treeSha)
  if (!obj || obj.type !== 'tree') return null
  const entries = parseTree(obj.content)
  const head = parts[0]
  const entry = entries.find((e) => e.name === head)
  if (!entry) return null
  if (parts.length === 1) return entry.sha
  return findInTree(entry.sha, parts.slice(1))
}

function getFileAtCommit(commitSha, filePath) {
  const obj = readObj(commitSha)
  if (!obj || obj.type !== 'commit') return null
  const c = parseCommit(obj.content)
  if (!c.tree) return null
  const blobSha = findInTree(c.tree, filePath.split('/'))
  if (!blobSha) return null
  const blob = readObj(blobSha)
  if (!blob || blob.type !== 'blob') return null
  return blob.content.toString('utf8')
}

function walkAll(headSha) {
  const visited = new Set()
  const stack = [headSha]
  const commits = []
  while (stack.length) {
    const sha = stack.pop()
    if (visited.has(sha)) continue
    visited.add(sha)
    const obj = readObj(sha)
    if (!obj || obj.type !== 'commit') continue
    const c = parseCommit(obj.content)
    commits.push({ sha, ...c })
    for (const p of c.parents) stack.push(p)
  }
  return commits
}

function main() {
  const headSha = fs.readFileSync(path.join(gitDir, 'refs', 'heads', 'main'), 'utf8').trim()
  const commits = walkAll(headSha)
  console.log('TOTAL COMMITS:', commits.length)

  commits.forEach((c) => {
    const m = (c.committer || '').match(/ (\d+) [+-]\d{4}$/)
    c.ts = m ? parseInt(m[1], 10) : 0
  })
  commits.sort((a, b) => a.ts - b.ts)

  const targets = [
    'src/components/Navbar.tsx',
    'src/components/Footer.tsx',
    'tailwind.config.ts',
    'src/main.css',
  ]
  for (const filePath of targets) {
    console.log('\n=== HISTORY of', filePath, '===')
    let prevContent = null
    for (const c of commits) {
      const content = getFileAtCommit(c.sha, filePath)
      if (content === null) continue
      if (content !== prevContent) {
        const lines = content.split('\n')
        const interesting = lines.filter(
          (l) =>
            l.includes('FILETO') ||
            /font-(brand|serif|sans|bold|semibold|mono)/.test(l) ||
            l.includes('Cinzel') ||
            l.includes('Playfair') ||
            /family=Cinzel/.test(l) ||
            l.includes('googleapis'),
        )
        console.log(
          '\n--- commit',
          c.sha.slice(0, 10),
          '|',
          new Date(c.ts * 1000).toISOString(),
          '|',
          c.subject,
        )
        if (interesting.length) {
          interesting.forEach((l) => console.log('   ', l.trim()))
        } else {
          console.log('   (no matching lines)')
        }
        prevContent = content
      }
    }
  }
}

main()
