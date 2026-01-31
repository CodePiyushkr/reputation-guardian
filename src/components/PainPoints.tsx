import { XCircle, ArrowRight } from "lucide-react";

const painPoints = [
  "Negative or fake reviews hurting your sales",
  "No strong presence on Google & local platforms",
  "Incomplete or incorrect business information",
  "Competitors ranking higher than you locally",
  "Customers check reviews but don't contact you",
  "No optimized Google Business Profile",
  "Business not listed everywhere customers search",
];

const PainPoints = () => {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-3xl md:text-4xl mb-3 md:mb-4 block">😟</span>
          <h2 className="text-xl md:text-4xl font-bold mb-4 px-2">
            Is Your Business{" "}
            <span className="text-primary">Losing Customers</span> Because of
            Online Reputation Issues?
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-3 md:gap-4">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-3 md:gap-4 bg-card p-3 md:p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                <XCircle className="w-5 h-5 md:w-6 md:h-6 text-destructive flex-shrink-0" />
                <span className="text-sm md:text-lg">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-10 p-4 md:p-6 bg-primary text-primary-foreground rounded-xl text-center">
            <p className="text-sm md:text-xl font-semibold flex items-center justify-center gap-2 flex-wrap">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              Your online reputation decides whether customers trust you — or skip you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;