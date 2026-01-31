import { Check, Sparkles, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            💰 Simple & <span className="text-primary">Transparent</span> Pricing
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-3xl border-2 border-primary shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-6 text-center">
              <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold mb-4">
                <Sparkles className="w-4 h-4" />
                FREE CONSULTATION
              </div>
              <h3 className="text-2xl font-bold mb-2">Book a FREE Consultation</h3>
              <p className="text-primary-foreground/80">
                Get a Personalized POA (Plan of Action) for your business
              </p>
            </div>

            {/* Features */}
            <div className="p-6">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-green" />
                  <span className="font-medium">One-Time Payment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-green" />
                  <span className="font-medium">Lifetime Foundation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-green" />
                  <span className="font-medium">No Hidden Charges</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-green" />
                  <span className="font-medium">150+ Platform Coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-green" />
                  <span className="font-medium">All Bonus Setups Included</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button size="lg" className="w-full text-lg py-6 shadow-primary" asChild>
                  <a href="https://wa.me/919560910661" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book FREE Consultation Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;