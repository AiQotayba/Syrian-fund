import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

function FooterContent() {
  return (
    <footer className="py-8 mt-10 bg-white">
      <div className="container mx-auto px-6 max-w-[1632px] md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12"> 
          {/* Contact Section */}
          <div className="text-right space-y-6 order-2">
            <h3 className="font-arabic font-medium text-base md:text-xl mb-6 text-[#28473B]">تواصل معنا:</h3>
            <div className="space-y-2">
              {[
                {
                  icon: Mail,
                  text: "info@ssf.gov.sy",
                  link: "mailto:info@ssf.gov.sy",
                  dir: "ltr"
                },
                {
                  icon: MapPin,
                  text: "Damascus, Syria | دمشق - سوريا",
                  link: "#",
                  dir: "rtl"
                },
              ].map((item, index) => (
                <div className="flex items-center gap-4 justify-start" key={index}>
                  <item.icon className="w-6 h-6 text-[#9d926d] flex-shrink-0" />
                  <div className="flex flex-col">
                    <span 
                      className="font-arabic font-normal text-[16px] text-[#9d926d]" 
                      dir={item.dir}
                    >
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#9d926d]/30 mt-12 pt-8 text-center">
          <p className="font-arabic font-normal text-xs sm:text-sm md:text-base lg:text-xl text-[#28473B]">
            جميع الحقوق محفوظة للصندوق السيادي السوري © 2025
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterContent;