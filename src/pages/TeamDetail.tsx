import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { teamMembers, founderMember } from '@/data/content'
import { FadeIn } from '@/components/FadeIn'
import { ArrowLeft, Mail, Phone, Award, Briefcase, GraduationCap } from 'lucide-react'
import claudioPhoto from '@/assets/claudiocirculo-verde-sf-86d2f.png'

export default function TeamDetail() {
  const { slug } = useParams()
  const member = teamMembers.find((m) => m.slug === slug) || founderMember

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
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
    <div className="pt-24 pb-32 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <Link
            to="/#lideranca"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para Sócio Fundador
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col items-center">
            <FadeIn direction="up" delay={100}>
              <div className="relative group">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary/30 via-emerald-400/20 to-primary/40 blur-xl opacity-80" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-b from-primary/40 via-background to-border flex items-center justify-center">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                    <img
                      src={claudioPhoto}
                      alt={member.name}
                      className="w-full h-full object-cover transform scale-110"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs uppercase font-semibold tracking-wider mb-3">
                  Advogado desde 1991 • OAB/SP
                </div>
                <p className="text-xs text-muted-foreground">Fileto Expertise Empresarial</p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={200}>
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3">
                  {member.name}
                </h1>
                <p className="text-xl text-primary font-medium tracking-wide uppercase">
                  {member.role}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-10 pb-8 border-b border-border">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4 py-2 bg-card border border-border rounded-full text-sm"
                >
                  <Mail className="w-4 h-4 text-primary" /> {member.email}
                </a>
                {member.phone && (
                  <a
                    href={`tel:${member.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4 py-2 bg-card border border-border rounded-full text-sm"
                  >
                    <Phone className="w-4 h-4 text-primary" /> {member.phone}
                  </a>
                )}
              </div>

              <div className="space-y-4 text-muted-foreground text-base leading-relaxed mb-10">
                <h3 className="font-serif text-2xl text-foreground font-semibold mb-4">
                  Trajetória & Visão
                </h3>
                {member.extendedBio?.map((paragraph, i) => <p key={i}>{paragraph}</p>) || (
                  <p>{member.bio}</p>
                )}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Formação</p>
                    <p className="text-sm font-semibold text-foreground">Advogado desde 1991</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Gestão Executiva</p>
                    <p className="text-sm font-semibold text-foreground">
                      25+ Anos em Grandes Empresas
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Fundação</p>
                    <p className="text-sm font-semibold text-foreground">Desde Jan/2019</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-foreground font-semibold mb-4">
                  Áreas de Especialidade
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {member.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 border border-primary/30 text-foreground bg-primary/10 text-sm font-medium rounded"
                    >
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
  )
}
