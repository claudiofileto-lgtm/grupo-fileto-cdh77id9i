import { useEffect, useState } from 'react'

interface CleanFounderImageProps {
  src: string
  alt: string
  className?: string
}

// In-memory cache so canvas processing only happens once per session
let cachedCleanDataUrl: string | null = null

/**
 * CleanFounderImage
 * Loads the source PNG of Claudio Fileto with an embedded green ring.
 * Strips all green ring pixels using Canvas pixel analysis and converts the green
 * borders into transparent/clean alpha.
 * Combined with the parent container having a pure white background (bg-white),
 * this yields a pristine high-end portrait with zero green artifacts.
 */
export function CleanFounderImage({ src, alt, className = '' }: CleanFounderImageProps) {
  const [processedDataUrl, setProcessedDataUrl] = useState<string | null>(cachedCleanDataUrl)

  useEffect(() => {
    if (cachedCleanDataUrl) {
      setProcessedDataUrl(cachedCleanDataUrl)
      return
    }

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src

    img.onload = () => {
      try {
        const width = img.naturalWidth || img.width
        const height = img.naturalHeight || img.height

        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d', { willReadFrequently: true })

        if (!ctx) {
          setProcessedDataUrl(src)
          return
        }

        ctx.drawImage(img, 0, 0)
        const imgData = ctx.getImageData(0, 0, width, height)
        const data = imgData.data

        const centerX = width / 2
        const centerY = height / 2
        const maxRadius = Math.min(centerX, centerY)

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4
            const r = data[idx]
            const g = data[idx + 1]
            const b = data[idx + 2]
            const a = data[idx + 3]

            if (a === 0) continue

            const dx = x - centerX
            const dy = y - centerY
            const dist = Math.sqrt(dx * dx + dy * dy)
            const normalizedDist = dist / maxRadius

            // Green detection:
            // Detect green ring and emerald/forest tones
            const isGreenHue =
              (g > r * 1.15 && g > b * 1.15 && g > 35) ||
              (g > r + 15 && g > b + 15 && g > 30) ||
              (g > 60 && r < 110 && b < 120 && g > r && g > b) ||
              (g > 50 && r < 80 && b < 80)

            if (isGreenHue) {
              // Strip green ring completely
              data[idx + 3] = 0
            } else if (normalizedDist > 0.97) {
              // Clean anti-alias fringe at the very outer bounding perimeter
              data[idx + 3] = 0
            }
          }
        }

        ctx.putImageData(imgData, 0, 0)
        const resultUrl = canvas.toDataURL('image/png')
        cachedCleanDataUrl = resultUrl
        setProcessedDataUrl(resultUrl)
      } catch (err) {
        console.warn('Could not process founder image canvas:', err)
        setProcessedDataUrl(src)
      }
    }

    img.onerror = () => {
      setProcessedDataUrl(src)
    }
  }, [src])

  return <img src={processedDataUrl || src} alt={alt} className={className} loading="eager" />
}
