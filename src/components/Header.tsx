import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Rudraksh Services" className="h-10 md:h-12" />
        </a>

        <Button 
          size="sm" 
          className="gap-2"
          asChild
        >
          <a href="tel:+919560910661">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;