import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

function FooterContent() {
  let text = `text-[#9d926d]`


  return (
    <footer className={`${text} py-8 mt-10 bg-white`}>
      <div className="container mx-auto px-6 max-w-[1632px] md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          <div className="flex justify-center lg:justify-start order-1 lg:col-span-2">
            <Link href={"/"} className="max-w-[250px] md:max-w-[500px]">
              <Image
                src={`/logos/logo-1.png`}
                alt="الصندوق السيادي السوري"
                width={500}
                height={500}
                className="w-full h-full object-contain max-w-[250px] md:max-w-[559px]"
              />
            </Link>
          </div>
          <div className="text-right space-y-6 order-2 ">
            <h3 className={`font-arabic font-medium text-base md:text-xl mb-6 ${text} text-[#28473B]`}>تواصل معنا:</h3>
            <div className={`space-y-2 ${text}`}>
              {[
                {
                  icon: Mail,
                  text: "info@ssf.gov.sy",
                  link: "mailto:info@ssf.gov.sy"
                },
                {
                  icon: MapPin,
                  text: "دمشق - سوريا | Damascus, Syria",
                  link: "#"
                },
                {
                  icon: Phone,
                  text: "+963 953 962 259",
                  link: "tel:+963953962259",
                  dir: "ltr"
                }
              ].map((item, index) => (
                <div className="flex items-center gap-4 justify-start" key={index}>
                  <item.icon className={`w-6 h-6 ${text} flex-shrink-0`} />
                  <div className="flex flex-col">
                    <span className={`font-arabic font-normal text-[16px] ${text} ${item.dir ? "text-end" : ""}`} dir={item.dir || "rtl"}>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`border-t border-[#9d926d]/30 mt-12 pt-8 text-center ${text}`}>
          <p className={`font-arabic font-normal ${text} text-xs sm:text-sm md:text-base lg:text-xl text-[#28473B]`}>جميع الحقوق محفوظة للصندوق السيادي السوري © 2025</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterContent;