import { Phone, Mail, Globe, Rocket, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Rocket className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Start Building Your <span className="text-primary">Reputation</span> Today
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 rounded-2xl border shadow-md">
            <div className="space-y-6 mb-8">
              <a 
                href="https://wa.me/919560910661" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-brand-green/10 rounded-xl hover:bg-brand-green/20 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-xl font-bold">+91 95609 10661</p>
                </div>
              </a>

              <a 
                href="mailto:support@rudrakshservices.com" 
                className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-bold">support@rudrakshservices.com</p>
                </div>
              </a>

              <a 
                href="https://www.rudrakshservices.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Website</p>
                  <p className="text-lg font-bold">www.rudrakshservices.com</p>
                </div>
              </a>
            </div>

            <Button 
              size="lg" 
              className="w-full text-lg py-6 shadow-primary animate-pulse-glow"
              asChild
            >
              <a href="https://wa.me/919560910661" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp Now
              </a>
            </Button>
          </div>

          <p className="text-center text-lg font-semibold mt-8 text-muted-foreground">
            Your Reputation Is Your Biggest Asset – <span className="text-primary">Invest Once, Benefit Forever</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;