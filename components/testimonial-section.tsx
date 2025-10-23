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
                "Con PlantIA detectamos el problema exacto con foto y GPS, optimizamos el riego según el clima real,
                y cerramos el ciclo con tareas y evidencia. Reducimos pérdidas en 40% y ahorramos agua."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">AG</span>
                </div>
                <div>
                  <div className="font-semibold">Agrónomo — Fundo San José</div>
                  <div className="text-sm text-muted-foreground">Región del Maule, Chile</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Reducción pérdidas + gasto</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">GPS</div>
              <div className="text-sm text-muted-foreground">Ubicación exacta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30%</div>
              <div className="text-sm text-muted-foreground">Ahorro en riego</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
