import { Map, Smartphone, Bell, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Map,
    number: "01",
    title: "Crea tu campo digital",
    description: "Define cuarteles y cuadrillas para organizar tu campo de forma digital.",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Escanea con tu celular",
    description: "Cuando veas un fruto o hoja en estado dudoso, escanéalo con la app.",
  },
  {
    icon: Bell,
    number: "03",
    title: "Recibe diagnóstico IA",
    description: "El admin recibe la alerta con el diagnóstico y puede confirmarlo o descartarlo.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Obtén recomendaciones",
    description: "Si se confirma, la IA recomienda la acción fitosanitaria específica.",
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
