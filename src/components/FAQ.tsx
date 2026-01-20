import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need to be a physiotherapy student?",
      answer: "No. You do not need to be a physiotherapy student. We look for people who are physically active, reliable, and good at communication. Full training is provided.",
    },
    {
      question: "Is this a full-time role?",
      answer: "No. This is a flexible role. You can choose how many sessions you want to take based on your availability.",
    },
    {
      question: "How flexible are the working hours?",
      answer: "Very flexible. Sessions are scheduled between 9 AM and 7 PM, and you can choose slots that work for you.",
    },
    {
      question: "Is this role safe?",
      answer: "Yes. All sessions are scheduled during daytime hours, and patient details are verified before visits.",
    },
    {
      question: "How are sessions assigned?",
      answer: "Sessions are assigned based on your location, availability, and preferences to minimize travel.",
    },
    {
      question: "How do payments work?",
      answer: "Payments are made bi-weekly (every two weeks) directly to your bank account.",
    },
    {
      question: "Will I receive training?",
      answer: "Yes. We provide structured training and clear instructions before you start assisting patients.",
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Frequently asked questions</h2>
            <p className="section-subtitle mx-auto">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="feature-card !p-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-display font-semibold hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
