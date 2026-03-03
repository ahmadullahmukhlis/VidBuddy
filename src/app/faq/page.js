import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import PageHero from "@/components/sections/PageHero";
import TopAlertBar from "@/components/sections/TopAlertBar";

export default function FaqPage() {
  return (
    <main>
      <TopAlertBar />
      <Navbar />
      <PageHero
        tag="FAQ"
        title="Answers to"
        highlight="common questions"
        description="Everything you need to know about downloading videos with VidBuddy."
      />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
