import { TrendingUp, Calendar, Wallet } from "lucide-react";

const Earnings = () => {
  const stats = [
    {
      value: "₹500",
      label: "Per session",
      sublabel: "Earn up to",
    },
    {
      value: "₹40K+",
      label: "Per month",
      sublabel: "Top earners make",
    },
  ];

  const features = [
    {
      icon: Calendar,
      title: "Flexible hours",
      description: "Choose when you work based on your schedule",
    },
    {
      icon: TrendingUp,
      title: "Work as much as you want",
      description: "More sessions = more earnings",
    },
    {
      icon: Wallet,
      title: "Bi-weekly payments",
      description: "Get paid every two weeks directly to your bank",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-foreground text-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
            Earnings & flexibility
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            Flexible work that pays well. You decide how much you earn.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background/10 backdrop-blur rounded-2xl p-8 text-center border border-background/10"
            >
              <p className="text-sm text-primary font-medium mb-2">{stat.sublabel}</p>
              <p className="text-4xl sm:text-5xl font-display font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-background/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-background/60 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Earnings;
