import './globals.css'
import type { Metadata } from 'next'
import localFont from '@next/font/local';
import { Header } from './../components/Header';


const mason = localFont({
  src: '../../public/fonts/mason-serif-regular-webfont.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Witcher 3: Wild Hunt',
  description: 'Study Case - Creating a promotional page for the game The Witcher 3: Wild Hunt.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mason.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
