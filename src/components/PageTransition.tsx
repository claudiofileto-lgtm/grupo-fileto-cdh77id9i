import { ReactNode, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

/**
 * Repertório de animações refinadas para as páginas do Grupo Fileto.
 * Cada animação tem easing premium (cubic-bezier suave) e duração entre 600-680ms.
 */
export type PageTransitionEffect =
  | 'fade-up'
  | 'slide-right'
  | 'slide-left'
  | 'zoom-in'
  | 'blur-in'
  | 'elevate'

const EFFECT_CLASSES: Record<PageTransitionEffect, string> = {
  'fade-up': 'animate-page-fade-up',
  'slide-right': 'animate-page-slide-right',
  'slide-left': 'animate-page-slide-left',
  'zoom-in': 'animate-page-zoom-in',
  'blur-in': 'animate-page-blur-in',
  elevate: 'animate-page-elevate',
}

const ALL_EFFECTS: PageTransitionEffect[] = [
  'fade-up',
  'slide-right',
  'zoom-in',
  'slide-left',
  'blur-in',
  'elevate',
]

/**
 * Mapeamento explícito para as rotas principais conhecidas,
 * garantindo variedade estética intencional entre cada página.
 */
const ROUTE_EFFECT_MAP: Record<string, PageTransitionEffect> = {
  '/': 'fade-up',
  '/areas': 'zoom-in',
  '/lideranca': 'blur-in',
  '/fundador': 'blur-in',
  '/equipe': 'elevate',
}

/**
 * Gera um efeito determinístico com base no pathname (usando hash da string),
 * para rotas dinâmicas como /areas/:slug ou /equipe/:slug.
 * Assim, /areas/creditos-tributarios sempre usa um efeito, e /areas/home-equity
 * usa outro, sem surpresas aleatórias a cada render.
 */
function getDeterministicEffect(pathname: string): PageTransitionEffect {
  const cleanPath = pathname.replace(/\/+$/, '') || '/'

  // Rota exata pré-definida
  if (ROUTE_EFFECT_MAP[cleanPath]) {
    return ROUTE_EFFECT_MAP[cleanPath]
  }

  // Rotas por prefixo conhecido com variação por slug
  if (cleanPath.startsWith('/areas/')) {
    const slug = cleanPath.replace('/areas/', '')
    const areaEffects: PageTransitionEffect[] = [
      'slide-right',
      'zoom-in',
      'fade-up',
      'slide-left',
      'blur-in',
    ]
    let hash = 0
    for (let i = 0; i < slug.length; i++) {
      hash = (hash << 5) - hash + slug.charCodeAt(i)
      hash |= 0
    }
    const idx = Math.abs(hash) % areaEffects.length
    return areaEffects[idx]
  }

  if (cleanPath.startsWith('/equipe/') || cleanPath.startsWith('/lideranca/')) {
    return 'blur-in'
  }

  // Fallback hash geral determinístico
  let hash = 0
  for (let i = 0; i < cleanPath.length; i++) {
    hash = (hash << 5) - hash + cleanPath.charCodeAt(i)
    hash |= 0
  }
  const idx = Math.abs(hash) % ALL_EFFECTS.length
  return ALL_EFFECTS[idx]
}

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

/**
 * Wrapper de transição de página.
 * A cada troca de rota (pathname), aplica uma nova key e dispara a animação
 * configurada para aquele destino específico.
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  const location = useLocation()
  const prevPathnameRef = useRef(location.pathname)

  const effect = getDeterministicEffect(location.pathname)
  const animationClass = EFFECT_CLASSES[effect]

  useEffect(() => {
    prevPathnameRef.current = location.pathname
  }, [location.pathname])

  return (
    <div
      key={location.pathname}
      className={cn('w-full flex-grow flex flex-col', animationClass, className)}
    >
      {children}
    </div>
  )
}
