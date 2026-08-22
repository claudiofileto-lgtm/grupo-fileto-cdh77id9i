import { useParams, Link } from 'react-router-dom'
import { useEffect, Fragment } from 'react'
import { practiceAreas } from '@/data/content'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  ChevronRight,
  Scale,
  Building2,
  Briefcase,
  Landmark,
  DollarSign,
  Users,
  MapPin,
  ShieldCheck,
  Check,
  FileText,
  Lock,
  Award,
  TrendingUp,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Building2,
  Briefcase,
  Landmark,
  DollarSign,
  Users,
  MapPin,
  ShieldCheck,
  Check,
  FileText,
  Lock,
  Award,
  TrendingUp,
}

const HIGHLIGHT_PHRASE = 'Primeira TaxTech do Brasil'

// Renders the subtitle in gold (text-primary, inherited from the <p>) but
// isolates the TaxTech highlight phrase in white, per the area detail design.
function renderSubtitle(text: string) {
  const parts = text.split(HIGHLIGHT_PHRASE)
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <span className="text-white">{HIGHLIGHT_PHRASE}</span>}
    </Fragment>
  ))
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

  const isRich = !!(
    area.subtitle ||
    area.aboutSection ||
    area.stats ||
    area.method ||
    area.differentials ||
    area.scenario
  )

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

              {isRich ? (
                <div className="max-w-none">
                  {area.subtitle && (
                    <p className="text-lg md:text-xl font-serif text-primary mb-10 leading-snug">
                      {renderSubtitle(area.subtitle)}
                    </p>
                  )}
                  <p
                    className="text-xl text-white font-medium mb-8 [&_strong]:font-semibold"
                    dangerouslySetInnerHTML={{ __html: area.description }}
                  />
                  <div className="w-12 h-[1px] bg-primary mb-8"></div>
                  <p
                    className="text-muted-foreground leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{ __html: area.fullDescription }}
                  />
                </div>
              ) : (
                <div className="prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed">
                  <p className="text-xl text-white font-medium mb-8">{area.description}</p>
                  <div className="w-12 h-[1px] bg-primary mb-8"></div>
                  <p>{area.fullDescription}</p>
                  {area.highlights && area.highlights.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 mb-12 not-prose">
                      {area.highlights.map((h, i) => (
                        <div key={i} className="bg-card border border-border p-6">
                          <h4 className="font-serif text-xl text-white mb-3">{h.title}</h4>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {h.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  <p>
                    Nossa abordagem é pautada na análise meticulosa de cada cenário, identificando
                    riscos e oportunidades para desenvolver estratégias jurídicas sob medida.
                    Compreendemos que as questões atinentes ao{' '}
                    <strong>{area.title.toLowerCase()}</strong> exigem não apenas conhecimento
                    técnico profundo, mas também sensibilidade para os impactos nos negócios e na
                    vida de nossos clientes.
                  </p>
                </div>
              )}
            </FadeIn>

            {isRich && (
              <div className="mt-20 space-y-24">
                {/* Quem somos */}
                {area.aboutSection && (
                  <FadeIn>
                    <SectionHeader
                      eyebrow={area.aboutSection.eyebrow}
                      title={area.aboutSection.title}
                    />
                    {area.aboutSection.body && (
                      <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mb-8">
                        {area.aboutSection.body}
                      </p>
                    )}
                    {area.aboutSection.bullets && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        {area.aboutSection.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Check
                              className="w-5 h-5 text-primary shrink-0 mt-0.5"
                              strokeWidth={2}
                            />
                            <span className="text-foreground/90 leading-relaxed">{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </FadeIn>
                )}

                {/* Números */}
                {area.stats && area.stats.length > 0 && (
                  <FadeIn>
                    <SectionHeader eyebrow="Números" title="Resultados que geram caixa" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {area.stats.map((s, i) => {
                        const StatIcon = iconMap[s.icon] || Award
                        return (
                          <div
                            key={i}
                            className="bg-card border border-border p-8 text-center hover:border-primary/50 transition-colors"
                          >
                            <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center">
                              <StatIcon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                            </div>
                            <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                              {s.value}
                            </div>
                            <div className="text-sm text-muted-foreground leading-snug">
                              {s.label}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </FadeIn>
                )}

                {/* Método exclusivo */}
                {area.method && (
                  <FadeIn>
                    <SectionHeader eyebrow={area.method.eyebrow} title={area.method.title} />
                    {area.method.intro && (
                      <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mb-10">
                        {area.method.intro}
                      </p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {area.method.steps.map((step, i) => (
                        <div
                          key={i}
                          className="bg-card border border-border p-8 flex gap-5 hover:border-primary/50 transition-colors"
                        >
                          <div className="shrink-0 w-12 h-12 border border-primary/50 flex items-center justify-center">
                            <span className="font-serif text-primary text-xl">{step.number}</span>
                          </div>
                          <div>
                            <h4 className="font-serif text-lg text-white mb-1">{step.title}</h4>
                            {step.description && (
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {step.description}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                )}

                {/* Diferenciais */}
                {area.differentials && (
                  <FadeIn>
                    <SectionHeader
                      eyebrow={area.differentials.eyebrow}
                      title={area.differentials.title}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {area.differentials.bullets?.map((b, i) => {
                        const icons = [ShieldCheck, TrendingUp, Check, FileText, Award, Lock]
                        const DiffIcon = icons[i % icons.length]
                        return (
                          <div
                            key={i}
                            className="bg-card border border-border p-8 hover:border-primary/50 transition-colors"
                          >
                            <DiffIcon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
                            <p className="text-foreground/90 leading-relaxed">{b}</p>
                          </div>
                        )
                      })}
                    </div>
                  </FadeIn>
                )}

                {/* Cenário tributário brasileiro */}
                {area.scenario && (
                  <FadeIn>
                    <SectionHeader eyebrow={area.scenario.eyebrow} title={area.scenario.title} />
                    {area.scenario.body && (
                      <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mb-10">
                        {area.scenario.body}
                      </p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {area.scenario.bullets?.map((b, i) => {
                        const icons = [DollarSign, TrendingUp, AlertIcon, FileText]
                        const ScenarioIcon = icons[i % icons.length]
                        return (
                          <div
                            key={i}
                            className="bg-card border border-border p-8 flex items-start gap-5 hover:border-primary/50 transition-colors"
                          >
                            <ScenarioIcon
                              className="w-8 h-8 text-primary shrink-0 mt-0.5"
                              strokeWidth={1.5}
                            />
                            <p className="text-foreground/90 leading-relaxed text-lg">{b}</p>
                          </div>
                        )
                      })}
                    </div>
                  </FadeIn>
                )}
              </div>
            )}
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

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-[1px] w-8 bg-primary"></div>
        <span className="text-primary uppercase tracking-widest text-xs font-semibold">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">{title}</h2>
    </div>
  )
}

// Small inline alert icon (no direct Lucide "alert" import needed beyond what's imported)
function AlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}
