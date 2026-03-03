import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import PageHero from "@/components/sections/PageHero";
import PlatformsSection from "@/components/sections/PlatformsSection";
import StatsSection from "@/components/sections/StatsSection";
import TopAlertBar from "@/components/sections/TopAlertBar";

export default function SupportedSitesPage() {
  return (
    <main>
      <TopAlertBar />
      <Navbar />
      <PageHero
        tag="SUPPORTED SITES"
        title="Save from the"
        highlight="platforms you use every day"
        description="VidBuddy supports the most popular video networks with reliable, high-quality downloads."
      />
      <PlatformsSection />
      <StatsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
