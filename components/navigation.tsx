import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">PlantAI</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#que-es" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ¿Qué es?
          </a>
          <a href="#beneficios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Beneficios
          </a>
          <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Cómo funciona
          </a>
          <a href="#precios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Precios
          </a>
        </div>

        <Button size="sm">Solicitar demo</Button>
      </div>
    </nav>
  )
}
