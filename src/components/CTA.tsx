import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Trophy } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="glass p-12 rounded-3xl text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transforma tu futuro con <span className="text-primary">IA</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a más de 1,000 estudiantes que ya están aplicando IA en sus negocios y carreras
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button variant="hero" size="hero" className="w-full sm:w-auto">
                Reserva tu plaza ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Ver programa completo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-8 h-8 text-primary mr-3" />
                  <span className="text-3xl font-bold text-foreground">1,000+</span>
                </div>
                <p className="text-muted-foreground">Estudiantes graduados</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Trophy className="w-8 h-8 text-primary mr-3" />
                  <span className="text-3xl font-bold text-foreground">95%</span>
                </div>
                <p className="text-muted-foreground">Tasa de éxito</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="w-8 h-8 text-primary mr-3" />
                  <span className="text-3xl font-bold text-foreground">12</span>
                </div>
                <p className="text-muted-foreground">Meses de formación</p>
              </div>
            </div>
          </div>

          {/* Urgency Banner */}
          <div className="bg-gradient-accent p-6 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              ⚡ ¡Últimas plazas disponibles!
            </h3>
            <p className="text-primary-foreground/90">
              Solo quedan 15 plazas para la próxima cohorte que inicia el 15 de enero
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;