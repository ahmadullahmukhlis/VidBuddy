export default function StatsSection() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(135deg, #FF6B00 0%, #FF8C42 100%)" }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <p className="text-5xl font-bold mb-2">50M+</p>
            <p className="opacity-90 text-lg">Happy Users</p>
          </div>
          <div>
            <p className="text-5xl font-bold mb-2">1000+</p>
            <p className="opacity-90 text-lg">Sites Supported</p>
          </div>
          <div>
            <p className="text-5xl font-bold mb-2">4.9★</p>
            <p className="opacity-90 text-lg">App Store Rating</p>
          </div>
          <div>
            <p className="text-5xl font-bold mb-2">24/7</p>
            <p className="opacity-90 text-lg">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
