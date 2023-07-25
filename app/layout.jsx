import './globals.css'
import { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    default: '1010 Group',
    template: '%s | 10/10',
  },
  description: 'Silo & Sirloin restaurant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      
        {children}
        <Footer />
        </body>
    </html>
  )
}
