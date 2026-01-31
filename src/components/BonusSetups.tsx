import { Gift, Check } from "lucide-react";

const bonusItems = [
  "Google Business products & services listing",
  "WhatsApp Business profile & catalog management",
  "Truecaller Business profile setup",
  "Facebook Page verification (optional)",
  "Personal LinkedIn + Business Page (optional)",
  "Branding creatives (Logo, Digital Visiting Card, Covers, QR Codes for Social Media, Payments & Reviews)",
];

const BonusSetups = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 md:px-4 py-2 rounded-full mb-3 md:mb-4 text-sm md:text-base">
              <Gift className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-bold">BONUS</span>
            </div>
            <h2 className="text-xl md:text-4xl font-bold">
              Additional Setups Included <span className="text-primary">FREE</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-4 md:p-8 rounded-xl md:rounded-2xl border-2 border-secondary/30">
            <div className="grid gap-3 md:gap-4">
              {bonusItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm md:text-base font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-6 md:mt-8 text-xs md:text-sm border-t border-border pt-4 md:pt-6">
              💡 Worth much more if done individually — included <strong>FREE</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSetups;