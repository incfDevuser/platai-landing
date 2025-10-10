import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cherry-tree-orchard-with-ripe-red-cherries-and-gre.jpg"
          alt="Cherry orchard"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* AI HUD overlay effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/50 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-accent/50 rounded-full animate-pulse delay-300" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-primary/30 rounded-full animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          Tus cultivos hablan.
          <br />
          <span className="text-primary">Nosotros los escuchamos.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
          IA que detecta enfermedades, predice problemas y recomienda acciones para mantener tus uvas, cerezos y
          duraznos sanos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8">
            Solicitar demo
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
            <Play className="mr-2 h-4 w-4" />
            Ver cómo funciona
          </Button>
        </div>

        {/* Floating stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">5 días</div>
            <div className="text-sm text-muted-foreground">Anticipación de enfermedades</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">30%</div>
            <div className="text-sm text-muted-foreground">Reducción de pérdidas</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Monitoreo continuo</div>
          </div>
        </div>
      </div>
    </section>
  )
}
