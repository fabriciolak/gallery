'use client'

import './globals.css'
import ReactQueryProvider from '@/utils/ReactQueryProvider'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gallery: Find Stunning Images in a Snap!',
  description: 'Find Stunning Images in a Snap!',
  authors: {
    name: 'fabriciolak',
    url: 'https://github.com/fabriciolak',
  },
  category: 'Gallery app made for fabriciolak',
  creator: 'fabriciolak',
  keywords: 'Gallery app, frontend developer, fabriciolak, react',
  robots: {
    'max-image-preview': 'standard',
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
