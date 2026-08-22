import { FadeIn } from '../FadeIn'
import { founderMember } from '@/data/content'
import claudioPhoto from '@/assets/claudiocirculo-verde-sf-86d2f.png'
import { Mail, Phone, Award, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react'

export function Team() {
  return (
    <section id="lideranca" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle gold glow in background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-primary"></div>
              <h2 className="text-primary uppercase tracking-widest text-xs sm:text-sm font-semibold">
                Liderança & Visão Estratégica
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Sócio Fundador
            </h3>
            <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
              Liderança pautada em mais de 30 anos de prática jurídica e executiva, integrando
              conhecimento técnico aprofundado, visão de negócios e soluções de alta precisão.
            </p>
          </FadeIn>
        </div>

        {/* Founder Showcase Card */}
        <div className="bg-card/70 backdrop-blur-sm border border-border rounded-lg p-6 sm:p-8 md:p-12 lg:p-14 relative shadow-2xl">
          {/* Subtle decorative gold corner */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/40 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-primary/20 rounded-bl-lg pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Founder Portrait Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <FadeIn direction="right">
                <div className="relative group">
                  {/* Outer glowing halo */}
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary/30 via-primary/20 to-primary/40 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Circular framing */}
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-b from-primary/30 via-background to-border flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center relative">
                      <img
                        src={claudioPhoto}
                        alt={founderMember.name}
                        className="w-full h-full object-cover transform scale-110 group-hover:scale-115 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card border border-primary/40 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Advogado desde 1991
                    </span>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                    {founderMember.name}
                  </h4>
                  <p className="text-primary font-medium tracking-wide text-sm sm:text-base uppercase mt-1">
                    {founderMember.role}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Fileto Expertise Empresarial</p>
                </div>
              </FadeIn>
            </div>

            {/* Founder Bio & Credentials Column */}
            <div className="lg:col-span-7">
              <FadeIn direction="left" delay={200}>
                {/* Bio text */}
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                  <p className="text-foreground/90 font-medium text-base sm:text-lg leading-relaxed">
                    Com sólida formação jurídica e especializações em administração empresarial e
                    tributária, Claudio Fileto lidera a Fileto Expertise Empresarial com o
                    compromisso de entregar valor estratégico tangível aos negócios de seus
                    clientes.
                  </p>
                  <p>
                    Acumula mais de 25 anos de vivência em funções de gestão e direção executiva em
                    grandes companhias nacionais e multinacionais, o que confere uma compreensão
                    pragmática e diferenciada dos desafios corporativos, fiscais e de liquidez
                    enfrentados por empresários.
                  </p>
                  <p>
                    Fundou a Fileto Expertise em janeiro de 2019, estruturando parcerias de alto
                    impacto como a AG Capital TaxTech e operações avançadas de Home Equity, unindo
                    segurança jurídica, tecnologia de ponta e celeridade nos resultados.
                  </p>
                </div>

                {/* Key Pillars / Expertise Tags */}
                <div className="mb-8">
                  <h5 className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                    Áreas de Especialidade & Atuação
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {founderMember.expertise.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center text-xs px-3 py-1.5 rounded bg-primary/10 border border-primary/30 text-foreground font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/80">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-primary/10 border border-primary/20 text-primary shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">OAB</p>
                      <p className="text-sm font-semibold text-foreground">Advogado desde 1991</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-primary/10 border border-primary/20 text-primary shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        Gestão
                      </p>
                      <p className="text-sm font-semibold text-foreground">25+ Anos Executivo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-primary/10 border border-primary/20 text-primary shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        Fundação
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        Fileto Expertise (2019)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-4">
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-black font-semibold text-sm rounded hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/20"
                  >
                    Entrar em Contato
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:contato@filetoexpertise.com.br"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 text-sm rounded transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    contato@filetoexpertise.com.br
                  </a>
                  <a
                    href="tel:+5511933293331"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 text-sm rounded transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    +55 (11) 93329-3331
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
