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
    <section className="relative min-h-[calc(100vh-4rem)] bg-gradient-hero pt-8 md:pt-12 pb-16 md:pb-20">
      <div className="container px-4">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 animate-fade-in-up">
            Build. Repair. Protect Your Business Reputation —{" "}
            <span className="text-primary">Locally</span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground mb-3 md:mb-4 animate-fade-in-up px-2">
            One-Time Reputation Building & Repair Plan for Local Businesses
          </p>
          <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 animate-fade-in-up">
            Trusted by Indian Businesses <span className="font-bold text-foreground">Since 2014</span>
          </p>

          {/* Trust Badges Carousel */}
          <div className="mb-8 md:mb-10 animate-fade-in-up">
            <Carousel
              opts={{
                align: "center",
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
              <CarouselContent className="-ml-3 md:-ml-4">
                {trustBadges.map((badge, index) => (
                  <CarouselItem key={index} className="pl-3 md:pl-4 basis-[80%] sm:basis-1/2 lg:basis-1/3">
                    <div className="flex items-center justify-center gap-2 bg-card/80 backdrop-blur-sm px-4 md:px-5 py-2 md:py-3 rounded-full border shadow-sm h-full">
                      <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
                      <span className="text-xs md:text-sm font-medium whitespace-nowrap">{badge.text}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 md:gap-4 justify-center animate-fade-in-up px-2">
            <Button size="lg" className="text-sm md:text-lg px-4 md:px-8 py-5 md:py-6 shadow-primary w-full sm:w-auto sm:mx-auto" asChild>
              <a href="tel:+919560910661">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Call Now for FREE Consultation
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm md:text-lg px-4 md:px-8 py-5 md:py-6 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-primary-foreground w-full sm:w-auto sm:mx-auto"
              asChild
            >
              <a href="https://wa.me/919560910661" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
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