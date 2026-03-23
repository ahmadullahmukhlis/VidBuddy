import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import Navbar from "@/components/sections/Navbar";
import PlatformsSection from "@/components/sections/PlatformsSection";
import PremiumSection from "@/components/sections/PremiumSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TopAlertBar from "@/components/sections/TopAlertBar";

export default function Home() {
  return (
    <main>
      <TopAlertBar />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PlatformsSection />
      <StatsSection />
      {/* <PremiumSection /> */}
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
