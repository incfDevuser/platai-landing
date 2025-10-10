import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$25.000",
    period: "CLP/mes",
    description: "Perfecto para comenzar",
    features: [
      "1 campo monitoreado",
      "App móvil básica",
      "Alertas por email",
      "Reportes mensuales",
      "Soporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$90.000",
    period: "CLP/mes",
    description: "Para productores serios",
    features: [
      "Hasta 10 cuarteles",
      "Sensores PlantAI™ incluidos",
      "IA predictiva avanzada",
      "Alertas en tiempo real",
      "Dashboard completo",
      "Reportes personalizados",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "A medida",
    period: "",
    description: "Solución personalizada",
    features: [
      "Campos ilimitados",
      "IA predictiva personalizada",
      "API completa",
      "Integración con sistemas",
      "Soporte 24/7",
      "Consultoría agronómica",
      "SLA garantizado",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="precios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Planes y precios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu operación
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card border rounded-2xl p-8 ${
                plan.highlighted ? "border-primary shadow-2xl shadow-primary/20 scale-105" : "border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Más popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground ml-2">{plan.period}</span>}
              </div>

              <Button className="w-full mb-6" variant={plan.highlighted ? "default" : "outline"}>
                Comienza tu piloto
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
