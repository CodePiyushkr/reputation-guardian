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
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full mb-6">
            <Globe className="w-5 h-5" />
            <span className="font-semibold">Local & Global Coverage</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Review Management Across 150+ Platforms — Local & Global
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            We manage reviews based on your business category, location & goals 
            to increase trust and improve conversions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Platforms Carousel */}
          <Carousel
            opts={{
              align: "start",
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
            <CarouselContent className="-ml-2 md:-ml-4">
              {platforms.map((platform) => (
                <CarouselItem key={platform} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm px-4 py-3 rounded-full border border-primary-foreground/20 flex items-center justify-center gap-2 hover:bg-primary-foreground/20 transition-colors">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="font-medium">{platform}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <p className="text-center mt-8 text-xl font-semibold">
            ⭐ And 150+ industry-specific platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewPlatforms;