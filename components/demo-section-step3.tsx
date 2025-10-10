import { CheckCircle2, Shield, Camera, FileText } from "lucide-react";

export function DemoSectionStep3() {
  return (
    <section className="py-24
    
    ">
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
              Aplicación <span className="text-primary">Automatizada</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              De la recomendación a la acción en minutos. Genera órdenes,
              verifica condiciones climáticas y registra todo con evidencia
              georreferenciada.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Aprueba con un toque
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Genera automáticamente la orden de aplicación con dosis
                    exactas, área y operador asignado.
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <p className="text-purple-800 font-medium text-sm">
                      📋 "Orden: Fungicida X, 2.5L/ha, Cuartel Norte"
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Verifica condiciones
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    La IA revisa clima, viento y lluvia en tiempo real para el
                    momento óptimo de aplicación.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-yellow-800 font-medium text-sm">
                      ⚠️ "Viento fuerte hoy. Mejor mañana 7-10 AM"
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
                    Aplica y registra
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Sube una foto del resultado para generar registro completo
                    con GPS y evidencia visual.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-green-800 font-medium text-sm">
                      ✓ "Aplicación registrada con GPS y timestamp"
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Ciclo completo</h4>
                  <p className="text-muted-foreground">
                    <strong>Detecta → Diagnostica → Aplica → Registra.</strong>
                    Todo automatizado para maximizar resultados y reducir
                    pérdidas.
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
