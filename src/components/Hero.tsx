import { Star, Phone, Stethoscope, Globe, Award, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const trustBadges = [
  { icon: Stethoscope, text: "Reputation Doctor for Businesses" },
  { icon: Globe, text: "150+ Review Platforms Supported" },
  { icon: Award, text: "One-Time Setup • Lifetime Value" },
  { icon: Star, text: "FREE Reputation Repair & Building Support" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-gradient-hero pt-12 pb-20">
      <div className="container">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Build. Repair. Protect Your Business Reputation —{" "}
            <span className="text-primary">Locally</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up">
            One-Time Reputation Building & Repair Plan for Local Businesses
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 animate-fade-in-up">
            Trusted by Indian Businesses <span className="font-bold text-foreground">Since 2014</span>
          </p>

          {/* Trust Badges Carousel */}
          <div className="mb-10 animate-fade-in-up">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2500,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {trustBadges.map((badge, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="flex items-center justify-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-3 rounded-full border shadow-sm h-full">
                      <badge.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm font-medium">{badge.text}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="text-lg px-8 py-6 shadow-primary">
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Started with FREE Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-primary-foreground"
              asChild
            >
              <a href="https://wa.me/919560910661" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Now: +91 95609 10661
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;