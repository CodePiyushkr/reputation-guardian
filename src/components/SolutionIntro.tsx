import { Shield, Sparkles, TrendingUp } from "lucide-react";

const SolutionIntro = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Complete Reputation Building & Repair –{" "}
            <span className="text-primary">One Time for Lifetime</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12">
            At <span className="font-semibold text-foreground">Rudraksh Services, Ajmer</span>, 
            we don't just create profiles — we build a strong digital foundation, 
            repair damaged reputation, and manage reviews across 150+ platforms 
            to help your business grow consistently.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Build Foundation</h3>
              <p className="text-muted-foreground text-sm">
                Strong digital presence across all major platforms
              </p>
            </div>

            <div className="p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Repair Reputation</h3>
              <p className="text-muted-foreground text-sm">
                Fix and improve your online image effectively
              </p>
            </div>

            <div className="p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="font-bold text-lg mb-2">Grow Business</h3>
              <p className="text-muted-foreground text-sm">
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