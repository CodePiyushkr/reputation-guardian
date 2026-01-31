import { Trophy, Globe, Shield, Briefcase, TrendingUp, HeartHandshake, Stethoscope } from "lucide-react";

const reasons = [
  { icon: Trophy, text: "Serving Businesses Since 2014" },
  { icon: Globe, text: "Clients from India, USA, UK & Canada" },
  { icon: Shield, text: "Ethical & Secure Reputation Practices" },
  { icon: Briefcase, text: "Specialists in Local Business Growth" },
  { icon: TrendingUp, text: "Result-Driven Reputation Strategies" },
  { icon: HeartHandshake, text: "Dedicated Support Team" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
            <Stethoscope className="w-6 h-6 md:w-8 md:h-8 text-primary" />
          </div>
          <h2 className="text-xl md:text-4xl font-bold mb-4">
            Why Rudraksh Services Is Your <span className="text-primary">Reputation Doctor</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-3 md:gap-4 bg-card p-3 md:p-5 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <span className="font-semibold text-sm md:text-base">{reason.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;