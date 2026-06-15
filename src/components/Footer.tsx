import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 border-2 border-primary flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-primary">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none tracking-wider">
                  HMGC
                </span>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Advogados
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Excelência e sofisticação jurídica na defesa dos interesses corporativos e individuais
              mais complexos.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-foreground">Endereço</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>
                  Av. Faria Lima, 3000 - 15º Andar
                  <br />
                  Itaim Bibi, São Paulo - SP
                  <br />
                  CEP 01451-000
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-foreground">Contato</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3 items-center hover:text-primary transition-colors">
                <Phone className="text-primary shrink-0" size={18} />
                <a href="tel:+551130000000">+55 (11) 3000-0000</a>
              </li>
              <li className="flex gap-3 items-center hover:text-primary transition-colors">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:contato@hmgcadvogados.com.br">contato@hmgcadvogados.com.br</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-foreground">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HMGC Advogados. Todos os direitos reservados.</p>
          <p>Design sofisticado e desenvolvimento por Skip.</p>
        </div>
      </div>
    </footer>
  )
}
