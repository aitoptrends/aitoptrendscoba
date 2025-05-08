import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Top Trends - Find & Review the Top AI Tools",
  description:
    "Discover and compare the best AI tools for your needs. Read reviews, check rankings, and stay updated with the latest AI trends.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add a meta tag to prevent wallet extensions from activating */}
        <meta name="web3-disabled" content="true" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
