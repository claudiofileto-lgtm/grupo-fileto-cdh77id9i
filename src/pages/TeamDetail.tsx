import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { teamMembers } from '@/data/content'
import { FadeIn } from '@/components/FadeIn'
import { ArrowLeft, Mail, Linkedin } from 'lucide-react'

export default function TeamDetail() {
  const { slug } = useParams()
  const member = teamMembers.find((m) => m.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-primary mb-4">Profissional não encontrado</h1>
          <Link to="/#equipe" className="text-muted-foreground hover:text-white underline">
            Voltar para a equipe
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
            to="/#equipe"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para Equipe
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <FadeIn direction="up" delay={100}>
              <div className="relative">
                <div className="absolute -inset-4 border border-primary/20 translate-x-4 translate-y-4" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover relative z-10 filter grayscale"
                />
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 lg:pl-8">
            <FadeIn direction="up" delay={200}>
              <div className="mb-10">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
                  {member.name}
                </h1>
                <p className="text-xl text-primary font-medium tracking-wide uppercase">
                  {member.role}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-10 pb-10 border-b border-border">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4 py-2 bg-card border border-border rounded-full text-sm"
                >
                  <Mail className="w-4 h-4" /> {member.email}
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4 py-2 bg-card border border-border rounded-full text-sm"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn Profile
                </a>
              </div>

              <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg mb-12">
                <h3 className="font-serif text-2xl text-white mb-6">Biografia</h3>
                <p>{member.bio}</p>
                <p>
                  Com uma carreira marcada pela excelência técnica e foco em resultados,{' '}
                  {member.name.split(' ')[0]} construiu um sólido histórico de representação de
                  clientes nacionais e internacionais. Sua atuação destaca-se pela visão
                  estratégica, combinando profundo conhecimento jurídico com a compreensão do
                  ambiente de negócios.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-white mb-6">Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {member.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 border border-primary/30 text-primary bg-primary/5 text-sm"
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
