export default function HowItWorksSection() {
  return (
    <section className="py-24" style={{ background: "#FFF9F5" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "#FFE4D6", color: "#FF6B00" }}
          >
            SIMPLE PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Download in <span style={{ color: "#FF6B00" }}>3 Easy Steps</span>
          </h2>
          <p className="text-xl text-gray-600">Get any video in seconds with our simple process</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="text-center relative">
            <div
              className="w-24 h-24 rounded-3xl mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-xl"
              style={{ background: "#FF6B00" }}
            >
              1
            </div>
            <div className="w-16 h-16 rounded-full absolute top-12 -right-8 hidden md:block" style={{ color: "#FF6B00" }}>
              <i className="fas fa-arrow-right text-3xl opacity-30"></i>
            </div>
            <h3 className="text-2xl font-bold mb-3">Copy Link</h3>
            <p className="text-gray-600">Copy the video URL from your favorite platform</p>
            <div className="mt-4 flex justify-center gap-2">
              <i className="fab fa-youtube text-2xl text-gray-300"></i>
              <i className="fab fa-facebook text-2xl text-gray-300"></i>
              <i className="fab fa-instagram text-2xl text-gray-300"></i>
            </div>
          </div>

          <div className="text-center relative">
            <div
              className="w-24 h-24 rounded-3xl mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-xl"
              style={{ background: "#FF6B00" }}
            >
              2
            </div>
            <div className="w-16 h-16 rounded-full absolute top-12 -right-8 hidden md:block" style={{ color: "#FF6B00" }}>
              <i className="fas fa-arrow-right text-3xl opacity-30"></i>
            </div>
            <h3 className="text-2xl font-bold mb-3">Paste URL</h3>
            <p className="text-gray-600">Paste the link in our downloader box above</p>
            <div className="mt-4 flex justify-center">
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm" style={{ border: "2px dashed #FF6B00" }}>
                <i className="fas fa-link mr-2" style={{ color: "#FF6B00" }}></i>
                <span className="text-sm">your-video-url.com</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div
              className="w-24 h-24 rounded-3xl mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-xl"
              style={{ background: "#FF6B00" }}
            >
              3
            </div>
            <h3 className="text-2xl font-bold mb-3">Download</h3>
            <p className="text-gray-600">Choose quality and click download button</p>
            <div className="mt-4">
              <button className="px-6 py-2 text-white rounded-lg text-sm font-semibold shadow-lg" style={{ background: "#FF6B00" }}>
                <i className="fas fa-download mr-2"></i> Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
