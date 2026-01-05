import { Gift, Check } from "lucide-react";

const bonusItems = [
  "Business WhatsApp Profile Setup",
  "WhatsApp Catalog Management",
  "Truecaller Business Profile Setup",
  "Facebook Page Verification",
  "Personal LinkedIn Profile + Business Page (Optional)",
  "Branding Creatives (Logo, Digital Visiting Card, Covers)",
];

const BonusSetups = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full mb-4">
              <Gift className="w-5 h-5" />
              <span className="font-bold">BONUS</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Additional Setups Included <span className="text-primary">FREE</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-2xl border-2 border-secondary/30">
            <div className="grid sm:grid-cols-2 gap-4">
              {bonusItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8 text-sm border-t border-border pt-6">
              💡 Worth much more if done individually – included <strong>FREE</strong> with this plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSetups;