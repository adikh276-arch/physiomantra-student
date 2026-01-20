import { BookOpen, Headphones, Award, Gift } from "lucide-react";

const TrainingSupport = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Complete training",
      description: "Structured training provided before you start",
    },
    {
      icon: Headphones,
      title: "Step-by-step guidance",
      description: "Clear instructions for every session",
    },
    {
      icon: Award,
      title: "Ongoing support",
      description: "Access to licensed physiotherapists for help",
    },
    {
      icon: Gift,
      title: "Bonuses & rewards",
      description: "Performance bonuses and swag for top performers",
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">We train you and support you</h2>
          <p className="section-subtitle mx-auto">
            No prior experience needed. We'll teach you everything you need to succeed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="feature-card">
              <div className="w-12 h-12 rounded-xl bg-highlight flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSupport;
