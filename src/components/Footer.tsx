import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react'
import logoFileto from '@/assets/logofbronze-sf-07c40.png'

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-0 sm:pt-0 pb-6 text-gray-300">
      <div className="container mx-auto px-4 md:px-8">
        {/* 1. Logo F + GRUPO FILETO centralizado no topo */}
        <div className="flex justify-center items-center mb-0">
          <Link to="/" className="flex items-center gap-0 group">
            <img
              src={logoFileto}
              alt="GRUPO FILETO"
              className="h-28 sm:h-32 md:h-36 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="-ml-8 sm:-ml-10 flex flex-col items-center font-serif font-bold text-primary text-xs sm:text-sm md:text-base leading-tight select-none">
              <span className="block w-full text-center tracking-[0.10em]">GRUPO</span>
              <span className="block w-full text-center tracking-[0.04em]">FILETO</span>
            </div>
          </Link>
        </div>

        {/* 2. Abaixo do logo, os 4 blocos lado a lado na mesma linha horizontal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mb-2 items-start">
          {/* Bloco 1: Sobre */}
          <div>
            <h4 className="font-serif text-base md:text-lg font-semibold mb-2.5 text-white">
              Sobre
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-justify">
              Expertise estratégica jurídica, tributária, empresarial e financeira a serviço dos
              interesses corporativos e pessoais mais complexos e desafiadores.
            </p>
          </div>

          {/* Bloco 2: Endereço */}
          <div>
            <h4 className="font-serif text-base md:text-lg font-semibold mb-2.5 text-white">
              Endereço
            </h4>
            <div className="flex gap-2.5 text-xs sm:text-sm text-gray-300">
              <MapPin className="text-primary shrink-0 mt-0.5" size={17} />
              <a
                href="https://www.google.com/maps?q=Rua+Manoel+Coelho,+676,+Centro,+São+Caetano+do+Sul,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors leading-relaxed"
              >
                Rua Manoel Coelho, nº 676, sala 1508 — Centro — São Caetano do Sul — SP — CEP
                09510-101
              </a>
            </div>
          </div>

          {/* Bloco 3: Contato */}
          <div>
            <h4 className="font-serif text-base md:text-lg font-semibold mb-2.5 text-white">
              Contato
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li className="flex gap-2.5 items-center hover:text-primary transition-colors">
                <Phone className="text-primary shrink-0" size={17} />
                <a href="tel:+5511933293331">+55 (11) 93329-3331</a>
              </li>
              <li className="flex gap-2.5 items-center hover:text-primary transition-colors">
                <Mail className="text-primary shrink-0" size={17} />
                <a href="mailto:contato@filetoexpertise.com.br" className="break-all">
                  contato@filetoexpertise.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Bloco 4: Redes Sociais */}
          <div>
            <h4 className="font-serif text-base md:text-lg font-semibold mb-2.5 text-white">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-gray-700 bg-gray-800/60 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-gray-700 bg-gray-800/60 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <Instagram size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* 4. Copyright mantido abaixo de tudo */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} GRUPO FILETO. Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right">
            Design sofisticado e desenvolvimento por Skip.
          </p>
        </div>
      </div>
    </footer>
  )
}
