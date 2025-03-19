import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import {Providers} from "@/components/containers/providers";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Amej Trading - Learn To Trade. Trade Smart. Earn More.",
    description:
        "Join our trading community and learn from experienced traders. " +
        "Access structured training programs, personalized mentorship, and cutting-edge trading tools.",
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>{children}</Providers>
        </body>
        </html>
    )
}