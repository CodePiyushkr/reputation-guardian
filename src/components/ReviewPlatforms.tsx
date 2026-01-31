import { Globe, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const platforms = [
  "Google", "Facebook", "JustDial", "Zomato", "Swiggy",
  "TrustPilot", "SiteJabber", "TripAdvisor", "Amazon", "Flipkart",
];

const ReviewPlatforms = () => {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6 text-sm md:text-base">
            <Globe className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-semibold">Local & Global Coverage</span>
          </div>
          <h2 className="text-xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
            Review Management Across 150+ Platforms — Local & Global
          </h2>
          <p className="text-primary-foreground/80 text-sm md:text-lg max-w-2xl mx-auto px-2">
            We manage reviews based on your business category, location & goals 
            to increase trust and improve conversions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Platforms Carousel */}
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {platforms.map((platform) => (
                <CarouselItem key={platform} className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 rounded-full border border-primary-foreground/20 flex items-center justify-center gap-1 md:gap-2 hover:bg-primary-foreground/20 transition-colors">
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-secondary text-secondary" />
                    <span className="font-medium text-xs md:text-base">{platform}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <p className="text-center mt-6 md:mt-8 text-base md:text-xl font-semibold">
            ⭐ And 150+ industry-specific platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewPlatforms;