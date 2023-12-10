import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'
import Header from '@/components/Topbar'
import ActiveSectionContextProvider from "@/context/activity"

const syne = Syne({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ojochogwu Dickson | FullStack Engineer',
  description: 'FullStack software Engineer with approximately 3 years of experience building products, and Polished, pixel-perfect user experience for modern applications. Crafting Intelligent User Interfaces, and building scalable backend systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${syne.className} bg-[#040404]`}>
        < ActiveSectionContextProvider>
        <div className=''>
            <Header/>
        </div>   
          {children}
        </ ActiveSectionContextProvider>
      </body>
    </html>
  )
}
