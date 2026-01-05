import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import SolutionIntro from "@/components/SolutionIntro";
import CorePlan from "@/components/CorePlan";
import BonusSetups from "@/components/BonusSetups";
import ReviewPlatforms from "@/components/ReviewPlatforms";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <PainPoints />
      <SolutionIntro />
      <CorePlan />
      <BonusSetups />
      <ReviewPlatforms />
      <WhyChooseUs />
      <Pricing />
      <Timeline />
      <Contact />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
};

export default Index;