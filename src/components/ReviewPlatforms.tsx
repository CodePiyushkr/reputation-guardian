import { Globe, Star } from "lucide-react";

const platforms = [
  "Google", "Facebook", "JustDial", "Zomato", "Swiggy",
  "TrustPilot", "SiteJabber", "TripAdvisor", "Amazon", "Flipkart",
];

const ReviewPlatforms = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full mb-6">
            <Globe className="w-5 h-5" />
            <span className="font-semibold">Local & Global Coverage</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Review Management Across 150+ Platforms — Local & Global
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            We manage reviews based on your business category, location & goals 
            to increase trust and improve conversions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Scrollable on mobile */}
          <div className="overflow-x-auto pb-2">
            <div className="flex flex-wrap justify-center gap-3 min-w-max px-4 md:px-0">
              {platforms.map((platform) => (
                <div
                  key={platform}
                  className="bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20 flex items-center gap-2 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-medium">{platform}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center mt-8 text-xl font-semibold">
            ⭐ And 150+ industry-specific platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewPlatforms;