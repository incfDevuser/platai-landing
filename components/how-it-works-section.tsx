import { Smartphone, MapPin, CloudRain, ListChecks } from "lucide-react"

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Escanea con el celular",
    description: "Cuadrilla detecta un fruto/hoja sospechoso → Escanea con app móvil → IA analiza y entrega diagnóstico + severidad.",
  },
  {
    icon: MapPin,
    number: "02",
    title: "GPS + Foto del punto crítico",
    description: "Cada alerta se registra con foto + ubicación GPS exacta. Jefatura ve en mapa dónde está el problema real.",
  },
  {
    icon: CloudRain,
    number: "03",
    title: "Riego calculado con clima real",
    description: "Conectado a estación meteorológica → calcula cuándo y cuántas horas regar según especie, variedad y clima.",
  },
  {
    icon: ListChecks,
    number: "04",
    title: "Asigna tarea + Recibe evidencia",
    description: "Jefatura asigna tarea fitosanitaria/riego → Cuadrilla ejecuta → Sube evidencia fotográfica. Ciclo cerrado.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Cómo funciona</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuatro pasos simples para revolucionar tu agricultura
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                  <div className="relative bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center border-2 border-primary/30">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>

                <div className="text-sm font-mono text-primary mb-2">{step.number}</div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
