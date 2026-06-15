import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { practiceAreas } from '@/data/content'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ChevronRight, Scale, Building2, Briefcase, Landmark } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Building2,
  Briefcase,
  Landmark,
}

export default function AreaDetail() {
  const { slug } = useParams()
  const area = practiceAreas.find((a) => a.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-primary mb-4">Área não encontrada</h1>
          <Link to="/#areas" className="text-muted-foreground hover:text-white underline">
            Voltar para o início
          </Link>
        </div>
      </div>
    )
  }

  const Icon = iconMap[area.icon] || Scale

  return (
    <div className="pt-24 pb-32 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <Link
            to="/#areas"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para Áreas de Atuação
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <FadeIn delay={100}>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-card border border-border flex items-center justify-center shrink-0">
                  <Icon className="w-10 h-10 text-primary" strokeWidth={1} />
                </div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                  {area.title}
                </h1>
              </div>

              <div className="prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed">
                <p className="text-xl text-white font-medium mb-8">{area.description}</p>
                <div className="w-12 h-[1px] bg-primary mb-8"></div>
                <p>{area.fullDescription}</p>
                <p>
                  Nossa abordagem é pautada na análise meticulosa de cada cenário, identificando
                  riscos e oportunidades para desenvolver estratégias jurídicas sob medida.
                  Compreendemos que as questões atinentes ao{' '}
                  <strong>{area.title.toLowerCase()}</strong> exigem não apenas conhecimento técnico
                  profundo, mas também sensibilidade para os impactos nos negócios e na vida de
                  nossos clientes.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-1">
            <FadeIn direction="left" delay={200}>
              <div className="bg-card border border-border p-8 sticky top-32">
                <h3 className="font-serif text-2xl font-semibold mb-6">Outras Áreas</h3>
                <ul className="space-y-4 mb-10">
                  {practiceAreas
                    .filter((a) => a.id !== area.id)
                    .map((a) => (
                      <li key={a.id}>
                        <Link
                          to={`/areas/${a.slug}`}
                          className="flex items-center justify-between text-muted-foreground hover:text-primary group transition-colors"
                        >
                          <span>{a.title}</span>
                          <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      </li>
                    ))}
                </ul>

                <div className="bg-background p-6 border border-border text-center">
                  <h4 className="font-serif text-lg text-white mb-2">Precisa de Assessoria?</h4>
                  <p className="text-sm text-muted-foreground mb-6">
                    Agende uma reunião com nossos especialistas em {area.title}.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-primary text-white hover:bg-primary/90 rounded-none"
                  >
                    <Link to="/#contato">Fale Conosco</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
