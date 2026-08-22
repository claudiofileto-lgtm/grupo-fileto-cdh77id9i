import { FadeIn } from '../FadeIn'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=law%20firm%20architecture&color=black&dpr=2"
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-[0rem] text-left">
        <div className="max-w-3xl">
          <FadeIn delay={100}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold">
                FILETO EXPERTISE EMPRESARIAL
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8 text-foreground">
              Soluções Tributárias, Empresariais e Financeiras
            </h1>
          </FadeIn>

          <FadeIn delay={500}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Expertise estratégica jurídica, tributária, empresarial e financeira a serviço dos
              interesses corporativos e pessoais mais complexos e desafiadores.
            </p>
          </FadeIn>

          <FadeIn delay={700}>
            <Button
              size="lg"
              className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 py-6 text-base tracking-wide transition-all duration-300 shadow-[0_0_0_0_rgba(197,160,89,0)] hover:shadow-glow"
              onClick={() =>
                document.getElementById('escritorio')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Conheça o Escritório
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
