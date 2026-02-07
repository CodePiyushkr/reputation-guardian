import { XCircle } from "lucide-react";

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

          <p className="text-center text-base md:text-xl font-bold mt-8 md:mt-10 mb-4 md:mb-5 px-2">
            Your online reputation decides whether
          </p>

          <div className="p-5 md:p-8 bg-primary text-primary-foreground rounded-2xl text-center shadow-lg">
            <p className="text-lg md:text-2xl font-bold leading-snug">
              Customers trust you — or Skip you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;