import { CheckCircle2 } from "lucide-react";

export function DemoSectionStep2() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Diagnóstico <span className="text-primary">con IA</span> +
              Recomendación
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Escanea el fruto o hoja con la app móvil. La IA analiza, entrega
              diagnóstico con nivel de severidad y recomienda acción
              fitosanitaria específica.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Escanea con el celular
                  </h4>
                  <p className="text-muted-foreground">
                    Cuadrilla ve fruto/hoja sospechoso → Abre app → Saca foto →
                    IA analiza en 3 segundos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Diagnóstico + Severidad
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    IA entrega diagnóstico específico con nivel de confianza y
                    severidad (baja/media/alta).
                  </p>
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-3">
                    <p className="text-green-800 dark:text-green-300 font-medium text-sm">
                      ✓ "Botrytis detectada — Severidad: Alta — 94% confianza"
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
                    Recomendación agronómica
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    IA recomienda producto, dosis, momento de aplicación y
                    condiciones climáticas ideales.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                    <p className="text-blue-800 dark:text-blue-300 font-medium text-sm">
                      💡 "Aplicar fungicida Switch® 1.0 kg/ha en próximas 24h,
                      T° bajo 25°C"
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
                    Agrónomo valida
                  </h4>
                  <p className="text-muted-foreground">
                    Alerta llega a agrónomo → Revisa diagnóstico y foto → Confirma
                    o ajusta recomendación según criterio experto.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
              <img
                src="/plantaScan.png"
                alt="PlantIA Scan"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
