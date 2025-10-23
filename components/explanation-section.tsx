export function ExplanationSection() {
  return (
    <section id="que-es" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              ¿Qué es <span className="text-primary">PlantIA</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              PlantIA es tu asistente agronómico digital que detecta problemas en frutos con precisión,
              te entrega diagnóstico y recomendación, y te lleva directo al cultivo crítico con foto y ubicación GPS.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Además, conectado a estaciones meteorológicas, calcula cómo y cuándo regar según especie, variedad,
              frecuencia y tiempo óptimo. Todo documentado con tareas y evidencia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong>Objetivo:</strong> reducir pérdidas y gasto detectando antes, cerrando el ciclo con tareas + evidencia.
            </p>
          </div>
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
              <img
                src="/mobile-app-dashboard-showing-plant-health-monitori.jpg"
                alt="PlantAI App Dashboard"
                className="w-full rounded-lg"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground rounded-full p-4 shadow-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
