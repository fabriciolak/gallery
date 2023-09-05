import { Header } from '@/components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen ">
      <Header />
      <main>{children}</main>
    </div>
  )
}
