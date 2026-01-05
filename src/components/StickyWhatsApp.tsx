import { MessageCircle } from "lucide-react";

const StickyWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919560910661"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-brand-green text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all animate-bounce-in"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold hidden sm:inline">WhatsApp Now</span>
    </a>
  );
};

export default StickyWhatsApp;