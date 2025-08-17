import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* فيديو الخلفية */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/tXGQPGi-fZw?autoplay=1&mute=1&loop=1&playlist=tXGQPGi-fZw&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          className="w-full h-full object-cover"
          style={{
            minWidth: "100%",
            minHeight: "90%",
            transform: "scale(1.1)", // لإخفاء الحدود السوداء
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* الطبقة الخضراء الشفافة */}
      <div className="absolute inset-0 bg-emerald-600/40"></div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 text-center">
        <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto mb-8">
          <Image
            src="/logo-main.png"
            alt="الصندوق السيادي السوري"
            width={256}
            height={256}
            className="w-full h-full object-contain filter brightness-0 saturate-100"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(84%) sepia(58%) saturate(346%) hue-rotate(7deg) brightness(106%) contrast(106%)",
            }}
          />
        </div>
      </div>
    </section>
  )
}
