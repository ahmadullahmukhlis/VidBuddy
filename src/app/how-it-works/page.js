import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import Navbar from "@/components/sections/Navbar";
import PageHero from "@/components/sections/PageHero";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TopAlertBar from "@/components/sections/TopAlertBar";

export default function HowItWorksPage() {
  return (
    <main>
      <TopAlertBar />
      <Navbar />
      <PageHero
        tag="PROCESS"
        title="Download any video in"
        highlight="three quick steps"
        description="Copy a link, paste it into VidBuddy, and choose the quality you want."
      />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
