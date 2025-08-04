import { Button } from "@/components/ui/button";
import { Play, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Raúl Aguilar",
      description: "Raúl nos cuenta que gracias a una automatización aprendida en Racks Academy, pasó de mozo de almacén a encargado de departamento.",
      duration: "02:07"
    },
    {
      name: "María González",
      description: "María implementó IA en su negocio de consultoría y aumentó su productividad en un 300%.",
      duration: "01:45"
    },
    {
      name: "Carlos Ruiz",
      description: "Carlos creó su startup de IA después del curso y ya tiene 5 empleados.",
      duration: "02:20"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Casos de <span className="text-primary">éxito</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre cómo nuestros estudiantes han transformado sus carreras y negocios
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass p-8 rounded-3xl group hover:shadow-glow transition-all duration-300">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-card to-muted rounded-2xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      variant="hero" 
                      size="icon"
                      className="rounded-full w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                    {testimonial.duration}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Testimonial Quote */}
          <div className="glass p-12 rounded-3xl text-center max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 leading-relaxed">
              "Racks Academy me cambió la vida. En 6 meses pasé de no saber nada de IA a liderar el departamento de innovación en mi empresa."
            </blockquote>
            <div className="text-lg text-muted-foreground">
              <strong className="text-primary">Ana López</strong> - Directora de Innovación
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;