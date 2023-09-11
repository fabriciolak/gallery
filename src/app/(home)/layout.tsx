import { Header } from '@/components/Header'
// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Gallery: Find Stunning Images in a Snap!',
//   description: 'Find Stunning Images in a Snap!',
//   authors: {
//     name: 'fabriciolak',
//     url: 'https://github.com/fabriciolak',
//   },
//   category: 'Gallery app made for fabriciolak',
//   creator: 'fabriciolak',
//   keywords: 'Gallery app, frontend developer, fabriciolak, react',
//   robots: 'nofollow',
// }

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen ">
      <Header />
      <main>{children}</main>
    </div>
  )
}
