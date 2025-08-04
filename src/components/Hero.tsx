import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen geometric-bg relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-foreground">Curso de especialización en</span>
            <span className="block text-glow text-primary">Inteligencia Artificial</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            La escuela de IA que transforma tus ideas en oportunidades reales de negocio
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="hero" size="hero" className="w-full sm:w-auto">
              Reserva tu plaza
            </Button>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-primary">4.9</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <div className="text-muted-foreground">
                <div>Ver reseñas en</div>
                <div className="font-semibold">Google</div>
              </div>
            </div>
          </div>

          {/* Course Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-sm text-muted-foreground mb-2">DURACIÓN</div>
              <div className="text-xl font-bold text-foreground">12 meses</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-sm text-muted-foreground mb-2">INICIO</div>
              <div className="text-xl font-bold text-foreground">Ahora</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-sm text-muted-foreground mb-2">HORARIO</div>
              <div className="text-xl font-bold text-foreground">Flexible</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-sm text-muted-foreground mb-2">MODO</div>
              <div className="text-xl font-bold text-foreground">Online</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;