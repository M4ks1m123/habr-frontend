import './globals.css'
import { Inter } from 'next/font/google'

import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSideBar'
import RightSidebar from '@/components/shared/RightSideBar'
import Bottombar from '@/components/shared/BottomBar'
import AuthProvider from './context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
