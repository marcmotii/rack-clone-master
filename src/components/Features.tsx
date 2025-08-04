import { Brain, Rocket, Users, Zap, TrendingUp, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Práctica",
      description: "Aprende IA aplicada a casos reales de negocio, no teoría abstracta"
    },
    {
      icon: Rocket,
      title: "Sin Programación",
      description: "No necesitas experiencia técnica previa, te enseñamos desde cero"
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Únete a una comunidad de emprendedores y profesionales de IA"
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      description: "Ve resultados desde la primera semana con proyectos prácticos"
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Profesional",
      description: "Impulsa tu carrera o negocio con las habilidades más demandadas"
    },
    {
      icon: Award,
      title: "Certificación",
      description: "Obtén un certificado reconocido en el sector de IA"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¿Por qué elegir <span className="text-primary">Racks Academy</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos la primera escuela de IA enfocada en resultados reales de negocio
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass p-8 rounded-3xl group hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;