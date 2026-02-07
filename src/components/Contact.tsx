import { Phone, Mail, Globe, Rocket, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Rocket className="w-6 h-6 md:w-8 md:h-8 text-primary" />
          </div>
          <h2 className="text-xl md:text-4xl font-bold mb-4">
            Start Building Your <span className="text-primary">Reputation</span> Today
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-4 md:p-8 rounded-2xl border shadow-md">
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <a 
                href="https://wa.me/919560910661" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-brand-green/10 rounded-xl hover:bg-brand-green/20 transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs md:text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-base md:text-xl font-bold truncate">+91 95609 10661</p>
                </div>
              </a>

              <a 
                href="https://mail.google.com/mail/?view=cm&to=support@rudrakshservices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div className="text-left min-w-0 overflow-hidden">
                  <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                  <p className="text-sm md:text-lg font-bold truncate">support@rudrakshservices.com</p>
                </div>
              </a>

              <a 
                href="https://www.rudrakshservices.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-secondary-foreground" />
                </div>
                <div className="text-left min-w-0 overflow-hidden">
                  <p className="text-xs md:text-sm text-muted-foreground">Website</p>
                  <p className="text-sm md:text-lg font-bold truncate">www.rudrakshservices.com</p>
                </div>
              </a>
            </div>

            <Button 
              size="lg" 
              className="w-full text-base md:text-lg py-5 md:py-6 shadow-primary"
              asChild
            >
              <a href="https://wa.me/919560910661" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp Now
              </a>
            </Button>
          </div>

          <p className="text-center text-xs md:text-sm text-muted-foreground mt-6 md:mt-8 px-2">
            For customizable digital marketing services for your business{" "}
            <a href="https://rudrakshservices.com" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
              visit our website
            </a>
          </p>

          <p className="text-center text-sm md:text-lg font-semibold mt-3 md:mt-4 text-muted-foreground px-2">
            Your Reputation Is Your Biggest Asset — <span className="text-primary">Invest Once, Benefit Forever</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;