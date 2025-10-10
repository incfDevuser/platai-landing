import { CheckCircle2 } from "lucide-react";

export function DemoSectionStep2() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Diagnóstico <span className="text-primary">Inteligente</span> en
              Campo
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Una foto = diagnóstico instant áneo + plan de acción. Identifica
              enfermedades con 95% de precisión y recibe recomendaciones
              específicas.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Recibe alerta automática
                  </h4>
                  <p className="text-muted-foreground">
                    Te avisamos cuando detectamos cambios sospechosos. Ve
                    directo al punto exacto del problema.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Escanea y obtén diagnóstico
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Apunta la cámara a la hoja o fruto. IA analiza y diagnostica
                    en segundos.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-green-800 font-medium text-sm">
                      ✓ "Botrytis detectada con 92% de confianza"
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Recibe plan de acción
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Te decimos exactamente qué aplicar, cuándo y bajo qué
                    condiciones climáticas.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-blue-800 font-medium text-sm">
                      💡 "Aplica fungicida X en las próximas 48h si la humedad
                      supera 70%"
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Aprende contigo
                  </h4>
                  <p className="text-muted-foreground">
                    Cada confirmación mejora la precisión. Mientras más uses
                    PlantAI, más inteligente se vuelve.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
              <img
                src="/plantaScan.png"
                alt="PlantAI Field Map"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
