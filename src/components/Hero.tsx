import { Star, Phone, ShieldCheck, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero pt-8 pb-20">
      <div className="container">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img src={logo} alt="Rudraksh Services" className="h-20 md:h-28" />
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Build. Repair. Protect Your{" "}
            <span className="text-primary">Business Reputation</span> – Locally & Globally
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-100">
            One-Time Reputation Building & Repair Plan for Local Businesses
          </p>

          <p className="text-base md:text-lg font-medium text-foreground/80 mb-8 animate-fade-in-up animation-delay-200">
            Trusted by Businesses in India, USA, UK & Canada Since 2014
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Reputation Doctor for Your Business</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">150+ Review Platforms Supported</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border">
              <Award className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">One-Time Setup • Lifetime Value</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8 animate-fade-in animation-delay-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-500">
            <Button size="lg" className="text-lg px-8 py-6 shadow-primary">
              ✅ Get Started Today – ₹9,000 Only
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-primary-foreground"
              asChild
            >
              <a href="https://wa.me/919560910661" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp: +91 95609 10661
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;