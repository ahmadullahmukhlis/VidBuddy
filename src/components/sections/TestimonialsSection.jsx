const testimonials = [
  {
    text: "\"Best video downloader I've ever used! Super fast and supports all platforms I need.\"",
    name: "John Doe",
    role: "YouTube Creator",
  },
  {
    text: "\"The HD quality is amazing! Finally a downloader that actually delivers 4K videos.\"",
    name: "Jane Smith",
    role: "Video Editor",
  },
  {
    text: "\"Simple, fast, and reliable. The premium features are worth every penny!\"",
    name: "Mike Johnson",
    role: "Content Creator",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24" style={{ background: "#FFF9F5" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "#FFE4D6", color: "#FF6B00" }}
          >
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span style={{ color: "#FF6B00" }}>Users Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.name} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex text-[#FF6B00] mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-700 mb-4">{item.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full" style={{ background: "#FFE4D6" }}></div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
