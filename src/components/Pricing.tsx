import { Check, Zap, ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            💰 Simple, <span className="text-primary">Transparent</span> Pricing
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-3xl border-2 border-primary shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-6 text-center">
              <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold mb-4">
                <Zap className="w-4 h-4" />
                SPECIAL OFFER
              </div>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl line-through opacity-60">₹12,000</span>
                <span className="text-5xl font-extrabold">₹9,000</span>
              </div>
              <p className="text-primary-foreground/80">One-Time Payment Only</p>
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
                <Button size="lg" className="w-full text-lg py-6 shadow-primary">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Place Order Online
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full text-lg py-6 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-primary-foreground"
                  asChild
                >
                  <a href="https://wa.me/919560910661" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us Now
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