import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 bg-emerald-600">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="flex justify-center lg:justify-end order-1 lg:order-3">
            <div className="w-24 h-24 lg:w-28 lg:h-28">
              <Image
                src="/logo-new-golden.png"
                alt="الصندوق السيادي السوري"
                width={112}
                height={112}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="text-right space-y-6 order-2 lg:order-1 lg:col-span-2">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-400">تواصل معنا</h3>
              <div className="space-y-5 text-gray-300">
                <div className="flex items-center gap-4 justify-start">
                  <Mail className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-lg font-medium">البريد الإلكتروني</span>
                    <span className="text-green-300">info@syrianfund.gov.sy</span>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-4">
                  <MapPin className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-lg font-medium">العنوان</span>
                    <span className="text-green-300">دمشق، الجمهورية العربية السورية</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-green-400/20">
              <p className="text-gray-400 text-base leading-relaxed">
                الصندوق السيادي السوري - شريك استراتيجي في بناء مستقبل اقتصادي مستدام للجمهورية العربية السورية
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-400/30 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg">جميع الحقوق محفوظة للصندوق السيادي السوري © 2025</p>
        </div>
      </div>
    </footer>
  )
}
