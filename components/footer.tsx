"use client"
import Image from "next/image"
import { Mail } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function FooterContent() {
  const searchParams = useSearchParams()
  let color: any = Number(searchParams.get("color"))
  console.log(color);
  if (isNaN(color)) color = 1
  let logo: any = Number(searchParams.get("logo"))
  if (isNaN(logo)) logo = 2

  const Color = ["", "[#9d926d]", "[#2c4940]", "white"]
  const bgColor = Color[color]
  let text
  if (color == 3) text = `text-[${Color[1]}]`
  else text = `text-${Color[3]}`

  const logos = [
    "",
    "logo-2.png",
    // "logo-1.png",
    "logo-3.png",
    "logo-4.png",
    "logo-5.png",
    "logo-6.png",
    "logo-7.png",
    "logo-footer.png",
    "logo-golden.png",
    "logo-main.png",
    "logo-new-golden.png",
  ]
  /*
    ?color=1&logo=2
    logo = 1-9 لتغيير الشعار في الفوتر
    color = 1-3 لتغيير لون الخلفية في الفوتر
  */
  console.log(logos[logo], text, bgColor);

  return (
    <footer className={`${text} py-16 bg-${bgColor}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-12">

          <div className="flex justify-center lg:justify-start lg:order-1 order-2 lg:col-span-2">
            <div className="max-w-[200px]">
              <Image
                src={`/logos/${logos[logo]}`}
                alt="الصندوق السيادي السوري"
                width={256}
                height={256}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-right space-y-6 lg:order-2 ">
            <h3 className={`font-arabic font-medium text-2xl mb-6 ${text}`}>تواصل معنا</h3>
            <div className={`space-y-5 ${text}`}>
              <div className="flex items-center gap-4 justify-start">
                <Mail className={`w-6 h-6 ${text} flex-shrink-0`} />
                <div className="flex flex-col">
                  <span className={`font-arabic font-normal text-lg ${text}`}>البريد الإلكتروني</span>
                  <span className={`font-arabic font-light ${text}`}>info@syrianfund.gov.sy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`border-t border-${bgColor}/30 mt-12 pt-8 text-center ${text}`}>
          <p className={`font-arabic font-normal ${text} text-lg`}>جميع الحقوق محفوظة للصندوق السيادي السوري © 2025</p>
        </div>
      </div>
    </footer>
  )
}

export default function Footer() {
  return (
    <Suspense fallback={
      <footer className="text-white py-16 bg-[#9d926d]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-12">
            <div className="flex justify-center lg:justify-start lg:order-1 order-2 lg:col-span-2">
              <div className="max-w-[200px]">
                <Image
                  src="/logo-new-golden.png"
                  alt="الصندوق السيادي السوري"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="text-right space-y-6 lg:order-2">
              <h3 className="font-arabic font-medium text-2xl mb-6 text-white">تواصل معنا</h3>
              <div className="space-y-5 text-white">
                <div className="flex items-center gap-4 justify-start">
                  <Mail className="w-6 h-6 text-white flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-arabic font-normal text-lg text-white">البريد الإلكتروني</span>
                    <span className="font-arabic font-light text-white">info@syrianfund.gov.sy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/30 mt-12 pt-8 text-center">
            <p className="font-arabic font-normal text-white text-lg">جميع الحقوق محفوظة للصندوق السيادي السوري © 2025</p>
          </div>
        </div>
      </footer>
    }>
      <FooterContent />
    </Suspense>
  )
}
