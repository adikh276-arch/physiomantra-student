import { ArrowRight, Clock, GraduationCap, IndianRupee, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.svg";

interface HeroProps {
  onApplyClick: () => void;
}

const Hero = ({ onApplyClick }: HeroProps) => {
  const badges = [
    { icon: Clock, text: "Flexible work" },
    { icon: GraduationCap, text: "Training provided" },
    { icon: IndianRupee, text: "Up to ₹500/session" },
    { icon: MapPin, text: "Delhi NCR only" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10 py-16 sm:py-20">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <img src={Logo} alt="PhysioMantra" className="h-14 sm:h-16" />
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-up stagger-1">
            Work as a PT Assistant.{" "}
            <span className="text-primary">Earn flexibly.</span>{" "}
            Learn on the job.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up stagger-2">
            Join PhysioMantra as a Physiotherapy Assistant and help patients recover at home across Delhi NCR.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up stagger-3">
            {badges.map((badge, index) => (
              <div key={index} className="badge-highlight">
                <badge.icon className="w-4 h-4" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-4">
            <Button size="lg" className="text-base font-semibold px-8 py-6" onClick={onApplyClick}>
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base font-semibold px-8 py-6 border-2"
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            >
              How it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
