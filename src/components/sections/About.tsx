import { FadeIn } from '../FadeIn'
import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="escritorio" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute -inset-4 border border-primary/20 translate-x-4 translate-y-4" />
              <img
                src="https://img.usecurling.com/p/800/1000?q=law%20office%20interior&color=black&dpr=2"
                alt="Interior do Escritório"
                className="w-full h-auto object-cover relative z-10 filter grayscale-[20%]"
              />
              <div className="absolute bottom-0 right-0 bg-card p-6 md:p-8 z-20 shadow-2xl border-l border-t border-primary/30 transform translate-x-4 md:translate-x-12 translate-y-4 md:translate-y-12">
                <p className="font-serif text-3xl md:text-5xl text-primary font-bold mb-2">32+</p>
                <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                  Anos de Experiência
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200}>
            <div className="lg:pl-8 mt-12 lg:mt-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-primary"></div>
                <h2 className="text-primary uppercase tracking-widest text-sm font-semibold">
                  O Escritório
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Experiência, Precisão e <br />
                <span className="text-muted-foreground italic font-normal">Comprometimento</span>
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Nosso CEO, CLAUDIO FILETO, advogado desde 1991, com duas especializações em
                  administração empresarial e duas na área do direito tributário, e mais de 25 anos
                  de atuação em gestão e direção de grandes empresas nacionais e multinacionais,
                  fundou a Fileto Expertise Empresarial em janeiro de 2019, consolidando-se como um
                  escritório parceiro dos empresários, que vai muito além do tradicional. Para
                  tanto, agregou Parcerias importantes, que fazem toda a diferença.&nbsp;
                  <div>
                    Nossa filosofia baseia-se no atendimento personalizado e na busca implacável
                    pelos melhores resultados para nossos clientes, com inteligência, celeridade e
                    segurança.
                  </div>
                </p>
                <p>
                  Não trabalhamos com soluções padronizadas.&nbsp;
                  <div>
                    Analisamos cada caso minuciosamente, garantindo que as estratégias adotadas
                    sejam não apenas robustas, mas perfeitamente alinhadas às necessidades e aos
                    objetivos de negócios e pessoais de quem confia em nosso trabalho.
                  </div>
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
                <div>
                  <h4 className="font-serif text-white text-xl mb-2">Missão</h4>
                  <p className="text-sm text-muted-foreground">
                    Proteger e impulsionar os negócios de nossos clientes com redução de custos e
                    ampliação de margens, através da nossa expertise e de nossos parceiros, com
                    agilidade e segurança.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-white text-xl mb-2">Valores</h4>
                  <p className="text-sm text-muted-foreground">
                    Ética inegociável, sofisticação técnica, atualização constante e dedicação
                    absoluta aos interesses dos nossos clientes.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
