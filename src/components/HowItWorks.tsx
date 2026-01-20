import { FileText, Phone, GraduationCap, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      step: "1",
      title: "Apply online",
      description: "Fill out a quick application form",
    },
    {
      icon: Phone,
      step: "2",
      title: "Short call",
      description: "A brief chat with our team",
    },
    {
      icon: GraduationCap,
      step: "3",
      title: "Training",
      description: "Complete your onboarding",
    },
    {
      icon: Heart,
      step: "4",
      title: "Start helping",
      description: "Begin assisting patients",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">How it works</h2>
          <p className="section-subtitle mx-auto">
            Getting started is simple. Here's what to expect.
          </p>
        </div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="feature-card text-center relative z-10 h-full">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                    {step.step}
                  </div>
                  <div className="pt-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-highlight mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
