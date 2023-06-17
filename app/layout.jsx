import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: '10/10 Group',
    template: '%s | 10/10 Group',
  },
  description: 'Silo & Sirloin restaurant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        </body>
    </html>
  )
}
