import { MessageCircle } from "lucide-react";

const StickyWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919560910661"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-2 md:gap-3 bg-brand-green text-primary-foreground px-3 md:px-5 py-2 md:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      <span className="font-semibold text-sm md:text-base hidden sm:inline">WhatsApp Now</span>
    </a>
  );
};

export default StickyWhatsApp;