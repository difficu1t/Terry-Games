import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import NavBar from '@/components/NavBar/NavBar'
import ReduxProvider from '@/components/ReduxProvider/ReduxProvider'
import './globals.css'
import '../firebase'

const inter = Comfortaa({ subsets: ['latin'],
  weight: ['400'],
  variable: '--font-scada',
  display: 'swap',
  style: ['normal'], 
})

export const metadata: Metadata = {
  title: 'Terry Games',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <NavBar />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  )
}
