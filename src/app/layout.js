import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'Portfolio-Fabius',
  description: 'The Portfolio of Fabius',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
