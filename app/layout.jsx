import { Inter } from 'next/font/google'
import './globals.css'
import CustomSessionProvider from './providers/SessionProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextCommerce - Your Shopping Destination',
  description: 'A modern e-commerce platform built with Next.js 15',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomSessionProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CustomSessionProvider>
      </body>
    </html>
  )
}