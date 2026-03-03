const faqs = [
  {
    question: "Is VidBuddy really free?",
    answer:
      "Yes! VidBuddy is completely free with no hidden charges. We also offer a premium version for advanced features.",
  },
  {
    question: "Which video qualities are available?",
    answer:
      "We support all qualities including 4K, 1080p, 720p, 480p, and audio-only formats like MP3.",
  },
  {
    question: "Is it safe to download videos?",
    answer:
      "Absolutely! All downloads are scanned for malware and viruses. We prioritize your security.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "#FFE4D6", color: "#FF6B00" }}
          >
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span style={{ color: "#FF6B00" }}>Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-2 rounded-xl p-6" style={{ borderColor: "#FFE4D6" }}>
              <button className="flex justify-between items-center w-full">
                <span className="font-semibold text-lg">{faq.question}</span>
                <i className="fas fa-chevron-down" style={{ color: "#FF6B00" }}></i>
              </button>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
