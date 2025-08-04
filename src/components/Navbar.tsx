import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-foreground">RACKS</span>
              <span className="text-primary"> ACADEMY</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#equipo" className="text-muted-foreground hover:text-primary transition-colors">
              Equipo
            </a>
            <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            RESERVA TU PLAZA
          </Button>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;