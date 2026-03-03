import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import PageHero from "@/components/sections/PageHero";
import TopAlertBar from "@/components/sections/TopAlertBar";

export default function LoginPage() {
  return (
    <main>
      <TopAlertBar />
      <Navbar />
      <PageHero
        tag="ACCOUNT"
        title="Welcome back to"
        highlight="VidBuddy"
        description="Sign in to access your premium downloads and saved history."
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border p-10" style={{ borderColor: "#FFE4D6" }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign in</h2>
            <p className="text-gray-600 mb-8">Use your email and password to continue.</p>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  style={{ borderColor: "#FFE4D6" }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  style={{ borderColor: "#FFE4D6" }}
                />
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-[#FF6B00]" />
                  Remember me
                </label>
                <button type="button" className="text-[#FF6B00] font-semibold">
                  Forgot password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
                style={{ background: "#FF6B00" }}
              >
                Sign in
              </button>
            </form>
            <div className="mt-6 text-sm text-gray-600 text-center">
              New to VidBuddy? <span className="text-[#FF6B00] font-semibold">Create an account</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
