import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroContent from "@/components/hero-content"
import HeroVideo from "@/components/hero-video"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* الطبقة الخلفية: الفيديو والسلايد */}
        <HeroVideo />

        {/* الطبقة الأمامية: المحتوى */}
        <HeroContent />
      </section>
      <Footer />
    </main>
  )
}
