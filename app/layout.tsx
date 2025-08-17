import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "الصندوق السيادي السوري",
  description: "الصندوق السيادي السوري - استثمار في مستقبل سوريا",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <style>{`
html {
  font-family: 'QomraArabic', 'Segoe UI', Tahoma, Arial, sans-serif;
  --font-arabic: 'QomraArabic';
}
        `}</style>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
