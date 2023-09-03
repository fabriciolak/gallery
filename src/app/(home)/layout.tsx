import { Header } from '@/components/Header'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // flex gap-8 flex-col
    <div className="h-screen ">
      <Header />
      <main>{children}</main>
    </div>
  )
}
