import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import PageHero from "@/components/sections/PageHero";
import StatsSection from "@/components/sections/StatsSection";
import TopAlertBar from "@/components/sections/TopAlertBar";

export default function FeaturesPage() {
  return (
    <main>
      <TopAlertBar />
      <Navbar />
      <PageHero
        tag="FEATURES"
        title="Built for creators who need"
        highlight="speed, quality, and control"
        description="Explore the tools that make VidBuddy the fastest way to save and organize video content."
      />
      <FeaturesSection />
      <StatsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
