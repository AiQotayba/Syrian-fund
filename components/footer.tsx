import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-emerald-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex justify-end w-full md:w-auto order-1 md:order-2">
            <div className="w-20 h-20">
              <Image
                src="/logo-new-golden.png"
                alt="الصندوق السيادي السوري"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="text-right space-y-4 order-2 md:order-1">
            <h3 className="text-xl font-bold text-white">تواصل معنا</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 justify-start">
                <Mail className="w-4 h-4 text-whiteس flex-shrink-0" />
                <span>info@syrianfund.gov.sy</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                <span>دمشق، سوريا</span>
              </div> 
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-400/30 mt-8 pt-6 text-center">
          <p className="text-sm">جميع الحقوق محفوظة للصندوق السيادي السوري © 2025</p>
        </div>
      </div>
    </footer>
  )
}
