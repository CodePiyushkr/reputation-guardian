import { CheckCircle2, Lock } from "lucide-react";

const planFeatures = [
  {
    title: "Business Profiling",
    description: "Detailed analysis of your business model and online presence to identify gaps and growth opportunities.",
  },
  {
    title: "Business Listing",
    description: "Listing your business on high-impact and relevant platforms to boost Local visibility & Authority.",
  },
  {
    title: "Business Information Optimization",
    description: "Accurate, SEO-friendly details for Better Trust, discoverability & user experience.",
  },
  {
    title: "Social Media Profiling",
    description: "Professional setup of social media accounts with consistent branding.",
  },
  {
    title: "Branding Foundation",
    description: "Unified and trustworthy brand identity across all platforms.",
  },
  {
    title: "Local Marketing Plan (FREE)",
    description: "Customized marketing plan with FREE premium consultation.",
  },
  {
    title: "Optimized Google Business Profile",
    description: "Professional setup and optimization of your Google Business Page.",
  },
  {
    title: "Business WhatsApp Setup",
    description: "Complete professional WhatsApp Business profiling.",
  },
];

const CorePlan = () => {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6 text-sm md:text-base">
            <Lock className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-semibold">Reputation Building & Repair Plan</span>
          </div>
          <h2 className="text-xl md:text-4xl font-bold">
            <span className="text-primary">(One-Time Investment)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {planFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-4 md:p-6 rounded-xl border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 md:mt-10 text-sm md:text-lg px-4">
          🕒 This is a one-time foundational setup designed for long-term results.
        </p>
      </div>
    </section>
  );
};

export default CorePlan;