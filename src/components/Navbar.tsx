import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import logoFileto from '@/assets/logofbronze-sf-07c40.png'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (isHome) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/${hash}`)
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'O Escritório', href: '#escritorio' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Sócio Fundador', href: '#lideranca' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent',
        isScrolled || !isHome
          ? 'bg-background/95 backdrop-blur-md border-border py-2.5 sm:py-3'
          : 'bg-transparent py-4 sm:py-5',
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group">
          <img
            src={logoFileto}
            alt="GRUPO FILETO"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain flex-shrink-0"
          />
          <div className="flex flex-col items-center justify-center font-serif font-bold text-primary text-xs sm:text-sm md:text-base leading-tight">
            <span className="tracking-[0.18em] mr-[-0.18em] w-full text-center">GRUPO</span>
            <span className="tracking-[0.05em] mr-[-0.05em] w-full text-center">FILETO</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-4 px-4 flex flex-col gap-4 shadow-xl animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-foreground hover:text-primary py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
