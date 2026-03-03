export default function PageHero({ tag, title, highlight, description }) {
  return (
    <section className="py-20" style={{ background: "#FFF9F5" }}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "#FFE4D6", color: "#FF6B00" }}
          >
            {tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}{" "}
            {highlight ? <span style={{ color: "#FF6B00" }}>{highlight}</span> : null}
          </h1>
          <p className="text-xl text-gray-600">{description}</p>
        </div>
      </div>
    </section>
  );
}
