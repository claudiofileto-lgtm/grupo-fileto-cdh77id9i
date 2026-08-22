import { FadeIn } from '../FadeIn'
import { founderMember } from '@/data/content'
import { CleanFounderImage } from '@/components/CleanFounderImage'
import claudioPhoto from '@/assets/claudiocirculo-verde-sf-86d2f.png'
import {
  Mail,
  Phone,
  Award,
  Briefcase,
  GraduationCap,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

export function Team() {
  return (
    <section id="lideranca" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Gold Radiance (Strictly Gold / Primary, No Green) */}
      <div className="absolute top-1/3 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-primary/[0.05] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <h2 className="text-primary uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">
                Liderança & Visão Estratégica
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Sócio Fundador
            </h3>
            <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed font-light">
              Liderança pautada em mais de 30 anos de prática jurídica e executiva, integrando
              conhecimento técnico aprofundado, visão de negócios e soluções de alta precisão.
            </p>
          </FadeIn>
        </div>

        {/* Founder Showcase Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-card/90 via-card/70 to-card/95 border border-primary/20 backdrop-blur-md p-6 sm:p-10 md:p-14 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Elegant gold corner accents */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Founder Portrait Column - Large, imposing with gold rings & pure white inner background */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <FadeIn direction="right">
                <div className="relative flex flex-col items-center">
                  {/* Outer Gold Ambient Glow Halo */}
                  <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-primary/20 blur-2xl opacity-75 pointer-events-none" />

                  {/* Outer Gold Ring 1 (Thin outer gold border) */}
                  <div className="relative p-2.5 sm:p-3 rounded-full bg-gradient-to-br from-primary/60 via-primary/20 to-primary/70 shadow-[0_10px_40px_rgba(197,160,89,0.25)] flex items-center justify-center">
                    {/* Inner Gold Frame Border */}
                    <div className="p-1 rounded-full bg-background flex items-center justify-center">
                      {/* White Background Inner Circle Container - Large and imposing */}
                      <div className="w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 lg:w-[410px] lg:h-[410px] rounded-full overflow-hidden bg-white relative flex items-center justify-center shadow-inner">
                        {/* Processed Founder Portrait with Green Ring Removed and White Background */}
                        <CleanFounderImage
                          src={claudioPhoto}
                          alt={founderMember.name}
                          className="w-full h-full object-cover object-center transform scale-110 hover:scale-115 transition-transform duration-700 select-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Gold Pill Badge - Advogado desde 1991 */}
                  <div className="mt-[-20px] relative z-20 bg-background/95 border-2 border-primary px-5 py-2 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center gap-2.5 backdrop-blur-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
                      Advogado desde 1991
                    </span>
                  </div>

                  {/* Founder Name & Title beneath image */}
                  <div className="mt-6 text-center">
                    <h4 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                      {founderMember.name}
                    </h4>
                    <p className="text-primary font-semibold tracking-wider text-sm sm:text-base uppercase mt-1">
                      {founderMember.role}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1 font-medium">
                      Fileto Expertise Empresarial
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Founder Bio & Credentials Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <FadeIn direction="left" delay={200}>
                {/* Introduction Paragraph */}
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <p className="text-foreground font-serif text-lg sm:text-xl font-medium leading-relaxed italic">
                      &ldquo;Aliamos mais de três décadas de rigor técnico jurídico a uma visão de
                      negócios pragmática para transformar desafios complexos em liquidez, segurança
                      e valor tangível.&rdquo;
                    </p>
                  </div>
                  <p className="text-foreground/90 font-normal leading-relaxed pt-2">
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
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <h5 className="text-xs uppercase tracking-widest text-primary font-semibold">
                      Áreas de Especialidade & Atuação
                    </h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {founderMember.expertise.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center text-xs sm:text-sm px-3.5 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-foreground font-medium hover:border-primary/60 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mr-2 shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/80">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/40 border border-border/60">
                    <div className="p-2.5 rounded-md bg-primary/15 border border-primary/30 text-primary shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                        OAB
                      </p>
                      <p className="text-sm font-bold text-foreground">Advogado desde 1991</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/40 border border-border/60">
                    <div className="p-2.5 rounded-md bg-primary/15 border border-primary/30 text-primary shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                        Gestão
                      </p>
                      <p className="text-sm font-bold text-foreground">25+ Anos Executivo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/40 border border-border/60">
                    <div className="p-2.5 rounded-md bg-primary/15 border border-primary/30 text-primary shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                        Fundação
                      </p>
                      <p className="text-sm font-bold text-foreground">Fileto Expertise (2019)</p>
                    </div>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold text-sm rounded-md hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5"
                  >
                    Entrar em Contato
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:contato@filetoexpertise.com.br"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-card/80 border border-border text-muted-foreground hover:text-primary hover:border-primary/40 text-sm rounded-md transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    contato@filetoexpertise.com.br
                  </a>
                  <a
                    href="tel:+5511933293331"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-card/80 border border-border text-muted-foreground hover:text-primary hover:border-primary/40 text-sm rounded-md transition-colors"
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
