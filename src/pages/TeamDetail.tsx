import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { teamMembers, founderMember } from '@/data/content'
import { FadeIn } from '@/components/FadeIn'
import { CleanFounderImage } from '@/components/CleanFounderImage'
import {
  ArrowLeft,
  Mail,
  Phone,
  Award,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react'
import claudioPhoto from '@/assets/claudiocirculo-verde-sf-86d2f.png'

export default function TeamDetail() {
  const { slug } = useParams()
  const member = teamMembers.find((m) => m.slug === slug) || founderMember

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-primary mb-4">Perfil não encontrado</h1>
          <Link to="/#lideranca" className="text-muted-foreground hover:text-white underline">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-32 min-h-screen bg-background relative overflow-hidden">
      {/* Subtle Gold Background Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/[0.06] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/[0.05] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeIn>
          <Link
            to="/#lideranca"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Voltar para Liderança & Sócio Fundador
          </Link>
        </FadeIn>

        <div className="relative rounded-2xl bg-gradient-to-b from-card/90 via-card/75 to-card/95 border border-primary/20 backdrop-blur-md p-6 sm:p-10 md:p-12 lg:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
          {/* Subtle gold corner accents */}
          <div className="absolute top-0 right-0 w-28 h-28 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-28 h-28 border-b-2 border-l-2 border-primary/20 rounded-bl-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Founder Portrait Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <FadeIn direction="up" delay={100}>
                <div className="relative flex flex-col items-center">
                  {/* Outer Gold Ambient Halo */}
                  <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-primary/20 blur-2xl opacity-75 pointer-events-none" />

                  {/* Outer Gold Ring */}
                  <div className="relative p-2.5 sm:p-3 rounded-full bg-gradient-to-br from-primary/60 via-primary/20 to-primary/70 shadow-[0_10px_40px_rgba(197,160,89,0.25)] flex items-center justify-center">
                    {/* Inner frame */}
                    <div className="p-1 rounded-full bg-background flex items-center justify-center">
                      {/* Pure White Background Inner Circle Container */}
                      <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden bg-white relative flex items-center justify-center shadow-inner">
                        <CleanFounderImage
                          src={claudioPhoto}
                          alt={member.name}
                          className="w-full h-full object-cover object-center transform scale-110 select-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Gold Pill Badge */}
                  <div className="mt-[-18px] relative z-20 bg-background/95 border-2 border-primary px-4 py-1.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center gap-2 backdrop-blur-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
                      Advogado desde 1991 • OAB/SP
                    </span>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                      Fileto Expertise Empresarial
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Founder Full Profile & Bio Column */}
            <div className="lg:col-span-7">
              <FadeIn direction="up" delay={200}>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-[2px] w-8 bg-primary"></div>
                    <span className="text-primary text-xs uppercase tracking-widest font-semibold">
                      Sócio Fundador & CEO
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                    {member.name}
                  </h1>
                  <p className="text-lg sm:text-xl text-primary font-medium tracking-wide uppercase">
                    {member.role}
                  </p>
                </div>

                {/* Direct Contact Links */}
                <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-border/80">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-foreground/90 hover:text-primary transition-colors px-4 py-2 bg-card border border-border rounded-lg text-xs sm:text-sm"
                  >
                    <Mail className="w-4 h-4 text-primary" /> {member.email}
                  </a>
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\D/g, '')}`}
                      className="flex items-center gap-2 text-foreground/90 hover:text-primary transition-colors px-4 py-2 bg-card border border-border rounded-lg text-xs sm:text-sm"
                    >
                      <Phone className="w-4 h-4 text-primary" /> {member.phone}
                    </a>
                  )}
                  <a
                    href="/#contato"
                    className="flex items-center gap-1.5 px-4 py-2 bg-primary text-black font-semibold rounded-lg text-xs sm:text-sm hover:bg-primary/90 transition-colors ml-auto"
                  >
                    Solicitar Reunião
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Trajectory & Bio Section */}
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                  <h3 className="font-serif text-2xl text-foreground font-semibold mb-4 flex items-center gap-2">
                    <span>Trajetória & Visão Estratégica</span>
                  </h3>
                  {member.extendedBio?.map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  )) || <p>{member.bio}</p>}
                </div>

                {/* Key Pillars Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8 p-4 rounded-xl bg-secondary/40 border border-border/60">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-primary/15 border border-primary/30 text-primary shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">
                        Formação
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-foreground">
                        Advogado desde 1991
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-primary/15 border border-primary/30 text-primary shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">
                        Gestão Executiva
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-foreground">
                        25+ Anos em Grandes Empresas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-primary/15 border border-primary/30 text-primary shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">
                        Fundação
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-foreground">Desde Jan/2019</p>
                    </div>
                  </div>
                </div>

                {/* Specialties / Expertise */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <h3 className="font-serif text-xl text-foreground font-semibold">
                      Áreas de Especialidade
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((exp, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3.5 py-1.5 border border-primary/30 text-foreground bg-primary/10 text-xs sm:text-sm font-medium rounded-md"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mr-1.5 shrink-0" />
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
