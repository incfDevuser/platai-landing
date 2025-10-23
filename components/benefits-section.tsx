import { MapPin, Camera, Droplets, FileCheck } from "lucide-react"

const benefits = [
  {
    icon: Camera,
    title: "Detecta enfermedades con precisión",
    description: "Escanea frutos con tu celular. IA detecta problemas, entrega diagnóstico, severidad y recomendación específica.",
  },
  {
    icon: MapPin,
    title: "Ubicación GPS exacta del problema",
    description: "Cada detección se registra con foto + GPS. Dirígete al cultivo crítico sin pérdida de tiempo.",
  },
  {
    icon: Droplets,
    title: "Riego inteligente conectado al clima",
    description: "Conectado a estación meteorológica, te dice cómo, cuándo y cuántas horas regar según especie, variedad y clima real.",
  },
  {
    icon: FileCheck,
    title: "Tareas + Evidencia completa",
    description: "Asigna tareas a cuadrillas, recibe evidencia fotográfica y cierra el ciclo con trazabilidad total.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Beneficios que transforman tu agricultura</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnología de punta al servicio de tus cultivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
