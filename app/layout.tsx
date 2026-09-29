import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Libre_Baskerville } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const aileron = localFont({
  src: [
    { path: "./fonts/Aileron-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Aileron-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Aileron-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Aileron-Heavy.woff2", weight: "800", style: "normal" },
    { path: "./fonts/Aileron-Heavy.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-aileron-family",
  display: "swap",
})

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-family",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AIMD | Artificial Intelligence in Medicine",
  description: "AIMD at UT Dallas brings students together to work on artificial intelligence and healthcare.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${aileron.variable} ${libreBaskerville.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
