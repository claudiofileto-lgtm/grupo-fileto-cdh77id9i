import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react'
import logoBronze from '@/assets/logofbronze-sf-07c40.png'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-0 mb-6 group">
              <img
                src={logoBronze}
                alt="GRUPO FILETO"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="-ml-6 sm:-ml-8 flex flex-col items-center font-serif font-bold text-[#b8934a] text-[10px] sm:text-xs md:text-sm leading-tight select-none">
                <span className="block w-full text-center tracking-[0.10em]">GRUPO</span>
                <span className="block w-full text-center tracking-[0.04em]">FILETO</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Expertise estratégica jurídica, tributária, empresarial e financeira a serviço dos
              interesses corporativos e pessoais mais complexos e desafiadores.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-foreground">Endereço</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <a
                  href="https://www.google.com/maps?q=Rua+Manoel+Coelho,+676,+Centro,+São+Caetano+do+Sul,+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Rua Manoel Coelho, nº 676, sala 1508 — Centro — São Caetano do Sul — SP — CEP
                  09510-101
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-foreground">Contato</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3 items-center hover:text-primary transition-colors">
                <Phone className="text-primary shrink-0" size={18} />
                <a href="tel:+5511933293331">+55 (11) 93329-3331</a>
              </li>
              <li className="flex gap-3 items-center hover:text-primary transition-colors">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:contato@filetoexpertise.com.br">contato@filetoexpertise.com.br</a>
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
          <p>&copy; {new Date().getFullYear()} Fileto Expertise. Todos os direitos reservados.</p>
          <p>Design sofisticado e desenvolvimento por Skip.</p>
        </div>
      </div>
    </footer>
  )
}
