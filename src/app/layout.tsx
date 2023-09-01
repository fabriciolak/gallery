import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A Gallery Search App that uses Unsplash and is made with React.',
  authors: {
    name: 'fabriciolak',
    url: 'https://github.com/fabriciolak',
  },
  category: 'Gallery app made for fabriciolak',
  creator: 'fabriciolak',
  keywords: 'Gallery app, frontend developer, fabriciolak, react',
  robots: 'nofollow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
