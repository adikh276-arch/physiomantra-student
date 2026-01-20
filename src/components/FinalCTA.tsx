import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onApplyClick: () => void;
}

const FinalCTA = ({ onApplyClick }: FinalCTAProps) => {
  return (
    <section className="py-16 sm:py-24 bg-primary">
      <div className="section-container text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
          Start earning while helping people recover
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Flexible work. Real experience. Meaningful impact.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="text-base font-semibold px-8 py-6 bg-background text-foreground hover:bg-background/90"
          onClick={onApplyClick}
        >
          Apply Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
