import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-2xl font-bold">
                  <span className="text-foreground">RACKS</span>
                  <span className="text-primary"> ACADEMY</span>
                </div>
              </div>
              <p className="text-muted-foreground text-lg mb-6 max-w-md">
                La escuela de IA que transforma tus ideas en oportunidades reales de negocio. 
                Aprende, aplica y triunfa con Inteligencia Artificial.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Enlaces rápidos</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Programa del curso</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Casos de éxito</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contacto</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">hola@racks.academy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">+34 900 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Madrid, España</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Racks Academy. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Términos de uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;