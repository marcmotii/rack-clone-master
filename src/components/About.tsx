import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Inteligencia Artificial aplicada a{" "}
              <span className="text-primary">negocios y empresas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Aprende a aplicar la IA de manera eficiente para optimizar procesos, emprender o impulsar tu carrera, 
              ¡sin necesidad de experiencia previa ni programación! Descubre cómo convertirte en un profesional 
              valioso y productivo en el sector que está transformando el mundo.
            </p>
          </div>

          {/* Video Section */}
          <div className="relative rounded-3xl overflow-hidden shadow-card mb-12">
            <div className="aspect-video bg-gradient-to-br from-card to-card-foreground/5 flex items-center justify-center">
              <div className="text-center">
                <Button variant="hero" size="hero" className="rounded-full p-8 mb-4">
                  <Play className="w-8 h-8" />
                </Button>
                <h3 className="text-2xl font-bold text-foreground mb-2">Video sobre Racks Academy</h3>
                <p className="text-muted-foreground">Conoce nuestra metodología y casos de éxito</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="hero">
              Reserva tu plaza
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;