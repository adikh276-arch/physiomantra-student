import { Home, Activity, Shield, MessageSquare } from "lucide-react";

const WhatYouDo = () => {
  const tasks = [
    {
      icon: Home,
      title: "Visit patients at home",
      description: "Travel to patients' homes in your area to provide support",
    },
    {
      icon: Activity,
      title: "Guide exercises",
      description: "Help patients perform exercises as instructed by physiotherapists",
    },
    {
      icon: Shield,
      title: "Ensure safety",
      description: "Make sure all exercises are done safely and correctly",
    },
    {
      icon: MessageSquare,
      title: "Share updates",
      description: "Report session progress to the supervising physiotherapist",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">What you'll do</h2>
          <p className="section-subtitle mx-auto">
            As a PT Assistant, you'll support patients in their recovery journey at home.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tasks.map((task, index) => (
            <div key={index} className="feature-card text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-highlight mb-4">
                <task.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{task.title}</h3>
              <p className="text-muted-foreground text-sm">{task.description}</p>
            </div>
          ))}
        </div>

        {/* Important clarification */}
        <div className="mt-10 bg-card rounded-xl border border-border p-6 max-w-2xl mx-auto" style={{ boxShadow: "var(--card-shadow)" }}>
          <p className="text-center text-muted-foreground">
            <span className="font-semibold text-foreground">Important:</span> You won't diagnose or treat independently. 
            You always work under the guidance of licensed physiotherapists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouDo;
