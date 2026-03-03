import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import PageHero from "@/components/sections/PageHero";
import TopAlertBar from "@/components/sections/TopAlertBar";

const downloads = [
  { name: "Windows", icon: "fa-windows", description: "Windows 10 and later" },
  { name: "macOS", icon: "fa-apple", description: "macOS 12+ Intel & Apple Silicon" },
  { name: "Android", icon: "fa-android", description: "Android 9+ mobile app" },
  { name: "Browser", icon: "fa-chrome", description: "Chrome & Edge extension" },
];

export default function DownloadPage() {
  return (
    <main>
      <TopAlertBar />
      <Navbar />
      <PageHero
        tag="DOWNLOAD"
        title="Get VidBuddy on"
        highlight="every device"
        description="Choose your platform and start downloading in seconds."
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloads.map((item) => (
              <div key={item.name} className="gradient-card p-8 rounded-2xl border hover-scale" style={{ borderColor: "#FFE4D6" }}>
                <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center" style={{ background: "#FFE4D6" }}>
                  <i className={`fab ${item.icon} text-2xl`} style={{ color: "#FF6B00" }}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <button
                  className="w-full py-2.5 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
                  style={{ background: "#FF6B00" }}
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
      <Footer />
    </main>
  );
}
