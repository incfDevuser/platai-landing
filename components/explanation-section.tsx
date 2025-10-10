export function ExplanationSection() {
  return (
    <section id="que-es" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              ¿Qué es <span className="text-primary">PlantAI</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              PlantAI combina sensores inteligentes, visión por computadora y modelos predictivos para detectar
              enfermedades y estrés vegetal antes de que sean visibles al ojo humano.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestra plataforma traduce las señales de tus plantas en información útil y accionable, permitiéndote
              tomar decisiones informadas para proteger tus cultivos y maximizar tu producción.
            </p>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
              <img src="/mobile-app-dashboard-showing-plant-health-monitori.jpg" alt="PlantAI App Dashboard" className="w-full rounded-lg" />
            </div>
            {/* Floating element */}
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
