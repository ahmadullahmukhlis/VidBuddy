const features = [
  {
    icon: "fa-bolt",
    title: "Lightning Fast",
    description: "Download videos at incredible speeds with our optimized multi-thread technology",
  },
  {
    icon: "fa-high-definition",
    title: "4K & HD Quality",
    description: "Download in stunning 4K, 1080p, 720p - choose your preferred video quality",
  },
  {
    icon: "fa-shield-alt",
    title: "100% Safe",
    description: "All downloads are scanned and verified - no malware, no viruses, guaranteed",
  },
  {
    icon: "fa-infinity",
    title: "Unlimited Downloads",
    description: "No limits, no restrictions. Download as many videos as you want, anytime",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "#FFE4D6", color: "#FF6B00" }}
          >
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need In A
            <br />
            <span style={{ color: "#FF6B00" }}>Video Downloader</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most powerful and feature-rich video downloading platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="gradient-card p-8 rounded-2xl border hover-scale" style={{ borderColor: "#FFE4D6" }}>
              <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style={{ background: "#FFE4D6" }}>
                <i className={`fas ${feature.icon} text-2xl`} style={{ color: "#FF6B00" }}></i>
              </div>
              <h3 className="text-xl font-bold  mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm" style={{ color: "#FF6B00" }}>
                <span>Learn more</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
