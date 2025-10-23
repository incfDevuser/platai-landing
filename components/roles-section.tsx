import { Smartphone, MonitorDot, ClipboardCheck, PieChart } from "lucide-react"

const roles = [
  {
    icon: Smartphone,
    role: "Cuadrillas",
    tool: "App móvil",
    description: "Escanean frutos/hojas con el celular, reciben tareas asignadas y suben evidencia fotográfica al completarlas.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: MonitorDot,
    role: "Jefatura",
    tool: "Panel web",
    description: "Ve alertas con GPS en mapa, asigna tareas a cuadrillas, revisa evidencia y configura parámetros de riego.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: ClipboardCheck,
    role: "Agrónomo",
    tool: "Validación + Panel",
    description: "Revisa diagnósticos IA, confirma o descarta alertas, valida recomendaciones fitosanitarias y de riego.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: PieChart,
    role: "Dirección",
    tool: "Reportes + Dashboard",
    description: "Accede a reportes ejecutivos, análisis de pérdidas evitadas, ROI de tratamientos y métricas de eficiencia.",
    color: "bg-orange-500/10 text-orange-600",
  },
]

export function RolesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cada rol con <span className="text-primary">su herramienta</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De la cuadrilla a la dirección: todos trabajan conectados con la información que necesitan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((item, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{item.role}</h3>
              <div className="text-sm text-primary font-semibold mb-3">{item.tool}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-secondary/30 border border-border rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Ciclo cerrado con trazabilidad total</h4>
              <p className="text-muted-foreground">
                <strong>Cuadrilla detecta</strong> → <strong>Jefatura asigna</strong> → <strong>Agrónomo valida</strong> → <strong>Dirección analiza</strong>.
                Todo registrado con fotos, GPS y timestamps automáticos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
