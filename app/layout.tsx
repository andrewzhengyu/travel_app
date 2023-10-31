import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientOnly from '@/components/ClientOnly'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Travel App',
  description: 'Generated by oomgandrew',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClientOnly>
        <Navbar/>
      </ClientOnly>
        <body className={urbanist.className}>{children}</body>
      <Footer/>
        
      
    </html>
  )
}
