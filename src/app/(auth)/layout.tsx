import { Comfortaa } from 'next/font/google'
import type { Metadata } from 'next'
import '../(main)/globals.css'
import '../firebase'
import ReduxProvider from '@/components/ReduxProvider/ReduxProvider'

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
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  )
}
