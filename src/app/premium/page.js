import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import PageHero from "@/components/sections/PageHero";
import PremiumSection from "@/components/sections/PremiumSection";
import TopAlertBar from "@/components/sections/TopAlertBar";

export default function PremiumPage() {
  return (
    <main>
      <TopAlertBar />
      <Navbar />
      <PageHero
        tag="PREMIUM"
        title="Upgrade for"
        highlight="unlimited power"
        description="Unlock faster downloads, premium formats, and priority support with VidBuddy Premium."
      />
      {/* <PremiumSection /> */}
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
