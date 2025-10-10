import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-12 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />

            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-medium mb-8 text-balance leading-relaxed">
                "Desde que usamos PlantAI, anticipamos brotes 5 días antes y reducimos pérdidas en 30%. Es como tener un
                agrónomo experto monitoreando 24/7."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">FS</span>
                </div>
                <div>
                  <div className="font-semibold">Fundo Santa Laura</div>
                  <div className="text-sm text-muted-foreground">Región del Maule, Chile</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Hectáreas monitoreadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Precisión en detección</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30%</div>
              <div className="text-sm text-muted-foreground">Reducción de pérdidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
