import { Check, Clock, ShieldCheck } from "lucide-react";

const WhoCanApply = () => {
  const requirements = [
    "Students or early-career individuals",
    "Physically fit and active",
    "Good communication skills",
    "Based in Delhi NCR",
    "Willing to travel locally for sessions",
    "Available between 9 AM – 7 PM",
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-4">Who this role is for</h2>
            <p className="section-subtitle mb-8">
              We're looking for reliable, active individuals who want flexible work with real impact.
            </p>

            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-highlight flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="feature-card bg-highlight border-primary/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Safe working hours
                </h3>
                <p className="text-muted-foreground">
                  All sessions are scheduled during safe daytime hours (9 AM – 7 PM). 
                  Your safety is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
