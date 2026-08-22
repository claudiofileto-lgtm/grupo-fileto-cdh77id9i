import { Link } from 'react-router-dom'
import { FadeIn } from '../FadeIn'
import { practiceAreas } from '@/data/content'
import { Scale, Building2, Briefcase, Landmark, DollarSign, ArrowRight } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Building2,
  Briefcase,
  Landmark,
  DollarSign,
}

export function PracticeAreas() {
  return (
    <section id="areas" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-primary"></div>
            <h2 className="text-primary uppercase tracking-widest text-sm font-semibold">
              Expertise
            </h2>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Áreas de Atuação</h3>
          <p className="text-muted-foreground text-lg">
            Oferecemos o que há de melhor no mercado, unindo soluções que vão de encontro aos
            anseios e necessidades de empresas e empresários, combinando conhecimento prático
            profundo, visão de negócios em áreas estratégicas Tributárias, Administrativas e
            Financeiras Inteligentes, com&nbsp;<span>suporte jurídico integral.</span>
            <span>&nbsp;</span>
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || Scale
            return (
              <FadeIn key={area.id} delay={index * 150}>
                <Link
                  to={`/areas/${area.slug}`}
                  className="group block p-8 md:p-12 border border-border bg-background hover:border-primary/50 hover:bg-card transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>

                  <div className="flex flex-col md:flex-row gap-6 md:items-start">
                    <div>
                      <h4 className="font-serif text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {area.title}
                      </h4>
                      <p
                        className="mb-6 leading-relaxed text-white [&_strong]:font-semibold"
                        dangerouslySetInnerHTML={{ __html: area.description }}
                      />
                      <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
