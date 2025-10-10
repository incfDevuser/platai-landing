import { AlertTriangle, CheckCircle2 } from "lucide-react"

export function DemoSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
              <img src="/agricultural-field-map-with-cherry-tree-sections-a.jpg" alt="PlantAI Field Map" className="w-full rounded-lg" />

              {/* Floating alerts */}
              <div className="absolute top-12 right-12 bg-destructive/90 backdrop-blur-sm text-destructive-foreground rounded-lg p-3 shadow-lg animate-pulse">
                <div className="flex items-center gap-2 text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="font-medium">Alerta: Riesgo de monilia</span>
                </div>
              </div>

              <div className="absolute bottom-12 left-12 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-medium">Cuartel 3: Saludable</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              IA especializada en <span className="text-primary">cerezos</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nuestro sistema está entrenado específicamente para detectar y predecir las enfermedades más comunes en
              cerezos.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Monilia</h4>
                  <p className="text-sm text-muted-foreground">Detección temprana con 95% de precisión</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Oídio</h4>
                  <p className="text-sm text-muted-foreground">Predicción 7 días antes de síntomas visibles</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Botrytis</h4>
                  <p className="text-sm text-muted-foreground">Monitoreo de condiciones de riesgo en tiempo real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
