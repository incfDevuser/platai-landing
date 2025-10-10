import { Leaf, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PlantAI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Inteligencia artificial al servicio de la agricultura chilena.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentación
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Mail className="w-4 h-4" />
              <a href="mailto:hola@plantai.cl" className="hover:text-foreground transition-colors">
                hola@plantai.cl
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 PlantAI. Todos los derechos reservados.</p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Hecho en Chile con inteligencia vegetal 🌿🇨🇱
          </p>
        </div>
      </div>
    </footer>
  )
}
