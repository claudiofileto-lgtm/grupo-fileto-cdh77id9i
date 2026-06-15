import { FadeIn } from '../FadeIn'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Mensagem Enviada',
      description: 'Recebemos sua mensagem. Entraremos em contato em breve.',
    })
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contato" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn direction="right">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-primary"></div>
                <h2 className="text-primary uppercase tracking-widest text-sm font-semibold">
                  Contato
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                Fale com Nossos Especialistas
              </h3>
              <p className="text-muted-foreground mb-12 max-w-md">
                Preencha o formulário para agendar uma consulta. Nossa equipe retornará com a máxima
                brevidade e confidencialidade.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-muted-foreground">
                      Nome Completo
                    </Label>
                    <Input
                      id="name"
                      required
                      className="bg-background border-border focus-visible:ring-primary rounded-none h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-muted-foreground">
                      E-mail Corporativo
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-background border-border focus-visible:ring-primary rounded-none h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-muted-foreground">
                    Assunto
                  </Label>
                  <Input
                    id="subject"
                    required
                    className="bg-background border-border focus-visible:ring-primary rounded-none h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-muted-foreground">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    required
                    className="bg-background border-border focus-visible:ring-primary rounded-none min-h-[150px] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-primary text-white hover:bg-primary/90 rounded-none px-10 py-6 text-base tracking-wide"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200} className="h-full min-h-[400px]">
            <div className="w-full h-full border border-border relative group overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 pointer-events-none"></div>
              <img
                src="https://img.usecurling.com/p/800/800?q=saopaulo%20map&color=black&dpr=2"
                alt="Localização"
                className="w-full h-full object-cover filter grayscale opacity-70 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-background/90 backdrop-blur-sm p-6 border border-border">
                <h4 className="font-serif text-lg font-semibold text-primary mb-2">
                  Sede São Paulo
                </h4>
                <p className="text-sm text-muted-foreground">
                  Av. Faria Lima, 3000 - 15º Andar
                  <br />
                  Itaim Bibi, SP
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
