import { Link } from 'react-router-dom'
import { FadeIn } from '../FadeIn'
import { teamMembers } from '@/data/content'
import { Linkedin } from 'lucide-react'

export function Team() {
  return (
    <section id="equipe" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <FadeIn className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary"></div>
              <h2 className="text-primary uppercase tracking-widest text-sm font-semibold">
                A Equipe
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold">
              Profissionais de Excelência
            </h3>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-muted-foreground max-w-md">
              Nossos sócios e associados possuem sólida formação acadêmica e experiência consolidada
              nos mais exigentes cenários jurídicos.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.id} delay={index * 200}>
              <div className="group cursor-pointer">
                <Link
                  to={`/equipe/${member.slug}`}
                  className="block relative overflow-hidden mb-6 aspect-[3/4]"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium">
                      Ver Perfil Completo
                    </span>
                  </div>
                </Link>

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {member.name}
                    </h4>
                    <p className="text-muted-foreground text-sm uppercase tracking-wider mb-3">
                      {member.role}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors p-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{member.bio}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
