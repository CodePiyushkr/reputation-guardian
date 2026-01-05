import { Trophy, Globe, Shield, Briefcase, TrendingUp, HeartHandshake, Stethoscope } from "lucide-react";

const reasons = [
  { icon: Trophy, text: "Serving Businesses Since 2014" },
  { icon: Globe, text: "Clients from India, USA, UK & Canada" },
  { icon: Shield, text: "Ethical & Secure Reputation Practices" },
  { icon: Briefcase, text: "Local Business Growth Specialists" },
  { icon: TrendingUp, text: "Results-Driven Reputation Strategy" },
  { icon: HeartHandshake, text: "Dedicated Support Team" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Stethoscope className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Why Rudraksh Services Is Your <span className="text-primary">Reputation Doctor</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-card p-5 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold">{reason.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;