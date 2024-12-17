import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.className
      )}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

