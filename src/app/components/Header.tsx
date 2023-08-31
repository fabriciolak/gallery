import * as React from 'react'
import { Link } from '@/components/Link'

export function Header() {
  return (
    <header className="w-full h-20">
      <div
        role="navigation"
        className="flex flex-1 h-full justify-between items-center xl:w-content xl:mx-auto p-6 xl:p-0"
      >
        <h2 title="Gallery" className="font-bold text-2xl">
          Gallery
        </h2>

        <nav className="flex gap-4">
          <Link
            className="text-sm text-zinc-700 font-medium hover:text-zinc-700/80"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm text-zinc-700 font-medium hover:text-zinc-700/80"
            href="/"
          >
            Find
          </Link>
          <Link
            className="text-sm text-zinc-700 font-medium hover:text-zinc-700/80"
            href="/"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
