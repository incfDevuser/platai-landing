import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function DemoSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
              <img
                src="/PoligonoCampo.png"
                alt="PlantAI Field Map"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Crea tu <span className="text-primary">Campo Digital</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Transforma tu campo en una plataforma inteligente. Combina
              imágenes satelitales, sensores y IA para actuar antes de que los
              problemas se conviertan en pérdidas.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Mapea tus parcelas
                  </h4>
                  <p className="text-muted-foreground">
                    Visualiza cada parcela con métricas de vigor, humedad y
                    estrés en un mapa interactivo en tiempo real.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Recibe alertas inteligentes
                  </h4>
                  <p className="text-muted-foreground">
                    Notificaciones automáticas sobre plagas, enfermedades y
                    condiciones críticas antes de que sea tarde.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Actúa con precisión
                  </h4>
                  <p className="text-muted-foreground">
                    Recomendaciones específicas de fertilización, riego y manejo
                    fitosanitario basadas en datos reales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
