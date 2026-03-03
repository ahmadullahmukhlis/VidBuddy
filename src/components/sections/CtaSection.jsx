export default function CtaSection() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(135deg, #FF6B00 0%, #FF8C42 100%)" }}>
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Downloading?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Join 50 million+ users who trust VidBuddy for their video downloads
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#FF6B00] px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center gap-2">
            <i className="fab fa-google-play text-xl"></i>
            Google Play
          </button>
          <button className="bg-white text-[#FF6B00] px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center gap-2">
            <i className="fab fa-apple text-xl"></i>
            App Store
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#FF6B00] transition transform hover:scale-105">
            <i className="fab fa-windows mr-2"></i>
            Windows
          </button>
        </div>
        <p className="mt-6 text-sm opacity-75">
          <i className="fas fa-check-circle mr-2"></i>
          No registration required • 100% Free • Fast downloads
        </p>
      </div>
    </section>
  );
}
