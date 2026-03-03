export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div
              className="w-12 h-12 rounded-xl primary-bg flex items-center justify-center shadow-lg"
              style={{ background: "#FF6B00" }}
            >
              <i className="fas fa-download text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold text-gray-800">
              Vid<span style={{ color: "#FF6B00" }}>Buddy</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#FF6B00] font-medium transition">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-[#FF6B00] font-medium transition">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-[#FF6B00] font-medium transition">
              How It Works
            </a>
            <a href="#" className="text-gray-700 hover:text-[#FF6B00] font-medium transition">
              Supported Sites
            </a>
            <a href="#" className="text-gray-700 hover:text-[#FF6B00] font-medium transition">
              Premium
            </a>
            <a href="#" className="text-gray-700 hover:text-[#FF6B00] font-medium transition">
              FAQ
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-5 py-2.5 text-gray-700 hover:text-[#FF6B00] font-medium transition">Login</button>
            <button
              className="px-6 py-2.5 text-white rounded-xl font-semibold transition shadow-lg hover:shadow-xl"
              style={{ background: "#FF6B00" }}
            >
              Download App <i className="fas fa-arrow-right ml-2 text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
