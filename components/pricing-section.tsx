import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$35.000",
    period: "CLP/mes",
    description: "Para comenzar con lo esencial",
    features: [
      "1 campo monitoreado (hasta 5 há)",
      "App móvil para cuadrillas",
      "Detección de enfermedades + GPS",
      "Alertas por email/WhatsApp",
      "Reportes mensuales básicos",
      "Soporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$120.000",
    period: "CLP/mes",
    description: "Gestión agronómica completa",
    features: [
      "Hasta 50 hectáreas",
      "Detección IA + Ubicación GPS",
      "Riego inteligente con clima real",
      "Conexión a estación meteorológica",
      "Panel web para jefatura",
      "Tareas + Evidencia fotográfica",
      "Reportes personalizados",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "A medida",
    period: "",
    description: "Solución para grandes productores",
    features: [
      "Hectáreas ilimitadas",
      "Múltiples campos y cuadrillas",
      "IA personalizada por cultivo",
      "Integración con ERP agrícola",
      "API completa",
      "Consultoría agronómica incluida",
      "Visita a campo para calibración",
      "Soporte 24/7 + SLA garantizado",
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
