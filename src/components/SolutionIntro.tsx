import { Shield, Sparkles, TrendingUp, Wrench } from "lucide-react";

const SolutionIntro = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-3xl md:text-4xl mb-3 md:mb-4 block">🛠️</span>
          <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">
            Complete Reputation Building & Repair —
            <br />
            <span className="text-primary">One-Time, Lifetime Impact</span>
          </h2>

          <p className="text-sm md:text-lg text-muted-foreground mb-8 md:mb-12 px-2">
            At <span className="font-semibold text-foreground">Rudraksh Services, Ajmer</span>, 
            we don't just create profiles. We build a strong digital foundation, repair damaged reputation, 
            upgrade your business presence, and manage reviews across 150+ platforms — helping your business 
            grow consistently and confidently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="p-4 md:p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Shield className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Build Foundation</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                Strong digital presence across all major platforms
              </p>
            </div>

            <div className="p-4 md:p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Repair Reputation</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                Fix and improve your online image effectively
              </p>
            </div>

            <div className="p-4 md:p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-brand-green" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Grow Business</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                Convert more visitors into loyal customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionIntro;