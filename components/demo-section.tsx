import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function DemoSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
              <img
                src="/PoligonoCampo.png"
                alt="PlantIA Field Map"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Visualiza problemas{" "}
              <span className="text-primary">en el mapa</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Cada alerta de enfermedad o riego aparece georeferenciada en tu
              panel web. Ve exactamente dónde está el problema crítico con foto
              y ubicación GPS.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Mapea tus cuarteles
                  </h4>
                  <p className="text-muted-foreground">
                    Define cuarteles, cuadrillas y cultivos en un mapa
                    interactivo. Cada zona con su historial completo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Alerta con GPS exacto
                  </h4>
                  <p className="text-muted-foreground">
                    Cuadrilla escanea → Alerta aparece en mapa con pin rojo →
                    Foto + diagnóstico + coordenadas exactas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Prioriza por severidad
                  </h4>
                  <p className="text-muted-foreground">
                    Colores indican severidad: rojo crítico, amarillo moderado,
                    verde bajo. Ataca primero lo urgente.
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
