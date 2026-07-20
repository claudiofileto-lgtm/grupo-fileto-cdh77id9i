import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import logoBronze from '@/assets/logo-fileto-douradosf-f2cfd.png'

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
    { name: 'Equipe', href: '#equipe' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent',
        isScrolled || !isHome
          ? 'bg-background/95 backdrop-blur-md border-border py-4'
          : 'bg-transparent py-6',
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group">
          <img
            src={logoBronze}
            alt="Fileto logo"
            className="h-9 sm:h-11 w-auto object-contain flex-shrink-0"
          />
          <div className="flex flex-col justify-center">
            <span className="font-serif font-bold text-[17px] sm:text-[20px] leading-none tracking-[0.12em]">
              FILETO
            </span>
            <span className="text-[8px] sm:text-[9px] leading-none tracking-[0.28em] text-muted-foreground uppercase text-left mt-1">
              Expertise Empresarial
            </span>
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
