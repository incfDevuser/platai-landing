import { CheckCircle2, Droplets, CloudRain, Camera } from "lucide-react";

export function DemoSectionStep3() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
              <img
                src="/PoligonoCampo.png"
                alt="PlantIA Irrigation Map"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Riego <span className="text-primary">Inteligente</span> +
              Tareas/Evidencia
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Conectado a estación meteorológica, PlantIA calcula cuándo y
              cuántas horas regar según especie, variedad y clima real. Asigna
              tareas y cierra el ciclo con evidencia.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <CloudRain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Conectado a estación meteorológica
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Recibe datos de T°, humedad, viento, lluvia en tiempo real →
                    IA calcula necesidad hídrica según cultivo.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-3">
                    <p className="text-purple-800 dark:text-purple-300 font-medium text-sm">
                      🌡️ "Cerezos: Riego 4h mañana, evapotranspiración alta"
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Cálculo por especie y variedad
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Define especie (cerezo, uva, etc.), variedad y etapa
                    fenológica → IA ajusta frecuencia y tiempo de riego óptimo.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                    <p className="text-blue-800 dark:text-blue-300 font-medium text-sm">
                      � "Cuartel Norte: 3 riegos/semana, 3.5h c/u, etapa brotación"
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-lg">→</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Asigna tarea a cuadrilla
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Jefatura asigna tarea fitosanitaria o de riego → Cuadrilla
                    recibe notificación en app móvil con detalle.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                    <p className="text-yellow-800 dark:text-yellow-300 font-medium text-sm">
                      📋 "Tarea: Aplicar fungicida Cuartel A — Asignado a Juan P."
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 mt-1 flex-shrink-0">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">
                    Evidencia fotográfica + GPS
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Cuadrilla completa tarea → Sube foto como evidencia →
                    Registro automático con GPS + timestamp. Trazabilidad total.
                  </p>
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-3">
                    <p className="text-green-800 dark:text-green-300 font-medium text-sm">
                      ✓ "Tarea completada: 15:30, GPS -35.4321, -71.6543"
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
                    Ciclo completo cerrado
                  </h4>
                  <p className="text-muted-foreground">
                    <strong>Detecta → Diagnostica → Asigna → Ejecuta →
                    Registra.</strong> Todo automatizado, todo documentado.
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
