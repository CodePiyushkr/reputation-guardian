import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-foreground text-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Rudraksh Services" className="h-12 bg-background rounded-lg p-1" />
            <div>
              <p className="font-bold">Rudraksh Services, Ajmer</p>
              <p className="text-sm text-background/70">Digital Business Solution</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <a 
              href="https://rudrakshservices.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-background hover:underline mb-2"
            >
              🌐 Visit Our Website
            </a>
            <p className="text-sm text-background/70">
              © {new Date().getFullYear()} Rudraksh Services. All rights reserved.
            </p>
            <p className="text-sm text-background/50 mt-1">
              Serving businesses worldwide since 2014
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;