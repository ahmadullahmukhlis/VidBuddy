export default function PremiumSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ background: "#FFE4D6", color: "#FF6B00" }}
            >
              PREMIUM FEATURES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Upgrade to <span style={{ color: "#FF6B00" }}>Premium</span>
              <br />
              For Even More
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#FFE4D6" }}>
                  <i className="fas fa-check text-sm" style={{ color: "#FF6B00" }}></i>
                </div>
                <span className="text-gray-700">Download entire playlists at once</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#FFE4D6" }}>
                  <i className="fas fa-check text-sm" style={{ color: "#FF6B00" }}></i>
                </div>
                <span className="text-gray-700">5x faster download speed</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#FFE4D6" }}>
                  <i className="fas fa-check text-sm" style={{ color: "#FF6B00" }}></i>
                </div>
                <span className="text-gray-700">Batch download up to 20 videos</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#FFE4D6" }}>
                  <i className="fas fa-check text-sm" style={{ color: "#FF6B00" }}></i>
                </div>
                <span className="text-gray-700">Priority customer support</span>
              </li>
            </ul>
            <button
              className="px-8 py-4 text-white rounded-xl font-semibold shadow-2xl transition transform hover:scale-105"
              style={{ background: "#FF6B00" }}
            >
              Go Premium - Just $9.99/month
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/500x400/FF6B00/FFFFFF?text=Premium+Features"
              className="rounded-3xl shadow-2xl mx-auto"
              style={{ border: "4px solid #FF6B00" }}
              alt="Premium Features"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
