import { XCircle, ArrowRight } from "lucide-react";

const painPoints = [
  "Negative or fake reviews hurting your sales",
  "No proper online presence on Google & local platforms",
  "Incomplete or incorrect business information",
  "Competitors ranking above you locally",
  "Customers checking reviews but not contacting you",
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Is Your Business{" "}
            <span className="text-primary">Losing Customers</span> Because of
            Online Reputation Issues?
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                <span className="text-base md:text-lg">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-primary text-primary-foreground rounded-xl text-center">
            <p className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2 flex-wrap">
              <ArrowRight className="w-6 h-6" />
              Your online reputation decides whether customers trust you or skip you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;