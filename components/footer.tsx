import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

function FooterContent() {
  return (
    <footer className="py-8 mt-10 bg-white">
      <div className="container mx-auto px-6 max-w-[1632px] md:px-12">
        <div className="flex flex-col md:flex-col justify-between items-start ">
          {/* Contact Section */}
          <h3 className="font-arabic font-medium text-base md:text-xl mb-6 text-[#28473B]">تواصل معنا:</h3>
          <div className="flex flex-col lg:flex-row justify-between items-start w-full *:w-full">
            <div className="text-right space-y-6 order-2">
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
                  <Link href={item.link} className="flex items-center gap-4 justify-start" key={index}>
                    <item.icon className="w-6 h-6 text-[#9d926d] flex-shrink-0" />
                    <div className="flex flex-col">
                      <span
                        className="font-arabic font-normal text-[16px] text-[#9d926d]"
                        dir={item.dir}
                      >
                        {item.text}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-right space-y-6 order-2">
              <div className="space-y-2">
                {[
                  {
                    icon: <Phone className="w-6 h-6 text-[#9d926d] flex-shrink-0" />,
                    Text: <p dir="rtl">
                      <span dir="rtl" className="ml-2">رقم الهاتف:</span>
                      <span dir="ltr">+963 986 666 606</span>
                    </p>,
                    link: "tel:+963986666606",
                    dir: "ltr"
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#9d926d] flex-shrink-0">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.27396 3.94072C3.01237 2.88646 6.8401 1.00024 12 1.00024C17.1599 1.00024 20.9876 2.88646 22.726 3.94072C23.7251 4.54659 24.1355 5.69142 23.9609 6.75162L23.5032 9.531C23.2353 11.1572 21.704 12.247 20.101 11.9521L17.6354 11.4984C16.5887 11.3058 15.8888 10.2986 16.0637 9.23676L16.2935 7.84151C15.7061 7.49353 14.3714 6.90907 12 6.90907C9.62863 6.90907 8.29388 7.49353 7.70655 7.84151L7.93635 9.23676C8.11123 10.2986 7.41126 11.3058 6.36463 11.4984L3.89895 11.9521C2.29601 12.247 0.764683 11.1572 0.496841 9.531L0.0390735 6.75162C-0.135542 5.69142 0.274923 4.54659 1.27396 3.94072ZM12 2.96985C7.30768 2.96985 3.82761 4.68829 2.27451 5.63017C2.04751 5.76783 1.8986 6.06129 1.95897 6.42782L2.41674 9.2072C2.50602 9.74928 3.01646 10.1125 3.55077 10.0142L6.01645 9.56056L5.76984 8.06327C5.66906 7.45138 5.85834 6.69991 6.51793 6.26936C7.34118 5.73198 9.06148 4.93946 12 4.93946C14.9385 4.93946 16.6588 5.73198 17.4821 6.26936C18.1417 6.69991 18.3309 7.45138 18.2302 8.06327L17.9836 9.56056L20.4492 10.0142C20.9835 10.1125 21.494 9.74928 21.5833 9.2072L22.041 6.42782C22.1014 6.06129 21.9525 5.76783 21.7255 5.63017C20.1724 4.68829 16.6923 2.96985 12 2.96985Z" fill="#9d926d"></path>
                        <path d="M4 22.0002C4 21.448 4.44772 21.0002 5 21.0002H19C19.5523 21.0002 20 21.448 20 22.0002C20 22.5525 19.5523 23.0002 19 23.0002H5C4.44772 23.0002 4 22.5525 4 22.0002Z" fill="#9d926d"></path>
                        <path d="M2 18.0002C1.44772 18.0002 1 18.448 1 19.0002C1 19.5525 1.44772 20.0002 2 20.0002H4C4.55228 20.0002 5 19.5525 5 19.0002C5 18.448 4.55228 18.0002 4 18.0002H2Z" fill="#9d926d"></path>
                        <path d="M19 19.0002C19 18.448 19.4477 18.0002 20 18.0002H22C22.5523 18.0002 23 18.448 23 19.0002C23 19.5525 22.5523 20.0002 22 20.0002H20C19.4477 20.0002 19 19.5525 19 19.0002Z" fill="#9d926d"></path>
                        <path d="M17 15.0002C16.4477 15.0002 16 15.448 16 16.0002C16 16.5525 16.4477 17.0002 17 17.0002H19C19.5523 17.0002 20 16.5525 20 16.0002C20 15.448 19.5523 15.0002 19 15.0002H17Z" fill="#9d926d"></path>
                        <path d="M7 19.0002C7 18.448 7.44771 18.0002 8 18.0002H10C10.5523 18.0002 11 18.448 11 19.0002C11 19.5525 10.5523 20.0002 10 20.0002H8C7.44771 20.0002 7 19.5525 7 19.0002Z" fill="#9d926d"></path>
                        <path d="M5 15.0002C4.44772 15.0002 4 15.448 4 16.0002C4 16.5525 4.44772 17.0002 5 17.0002H7C7.55229 17.0002 8 16.5525 8 16.0002C8 15.448 7.55229 15.0002 7 15.0002H5Z" fill="#9d926d"></path>
                        <path d="M13 19.0002C13 18.448 13.4477 18.0002 14 18.0002H16C16.5523 18.0002 17 18.448 17 19.0002C17 19.5525 16.5523 20.0002 16 20.0002H14C13.4477 20.0002 13 19.5525 13 19.0002Z" fill="#9d926d"></path>
                        <path d="M11 15.0002C10.4477 15.0002 10 15.448 10 16.0002C10 16.5525 10.4477 17.0002 11 17.0002H13C13.5523 17.0002 14 16.5525 14 16.0002C14 15.448 13.5523 15.0002 13 15.0002H11Z" fill="#9d926d"></path>
                      </g>
                    </svg>,
                    Text: <p dir="rtl">
                      <span dir="rtl" className="ml-2">رقم الهاتف الأرضي:</span>
                      <span dir="ltr">+963 116 666 606</span>
                    </p>,
                    link: "tel:+9630116666606",
                    dir: "rtl"
                  },
                ].map((item, index) => (
                  <Link href={item.link} className="flex items-center gap-4 justify-start" key={index}>
                    {item.icon}
                    <div className="flex flex-col">
                      <span
                        className="font-arabic font-normal text-[16px] text-[#9d926d]"
                        dir={item.dir}
                      >
                        {item.Text}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#9d926d]/30 mt-12 pt-8 text-center">
          <div className="font-arabic font-normal text-xs sm:text-sm md:text-base lg:text-xl text-[#28473B] flex flex-row gap-2 items-center justify-center mx-auto text-center">
            <p>جميع الحقوق محفوظة</p>
            <b> للصندوق السيادي السوري </b>
            © 2025
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterContent;