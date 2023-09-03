import * as React from 'react'
import { Link } from '@/components/Link'
import { Button } from '@/components/Button'

export function Header() {
  return (
    <header className="w-full h-20">
      <div
        role="navigation"
        className="flex flex-1 h-full justify-between items-center xl:w-content xl:mx-auto p-6 xl:p-4"
      >
        <h2 title="Gallery" className="font-bold text-2xl">
          Gallery
        </h2>

        <nav className="flex gap-1">
          <Button
            type="button"
            variant="default"
            asChild
            size="sm"
            className="hover:bg-zinc-50 bg-transparent border border-transparent hover:border hover:text-zinc-700 hover:border-zinc-300 hover:border-zinc-300/90"
          >
            <Link
              className="text-sm text-zinc-700 font-medium hover:text-zinc-700/90"
              href="/"
            >
              About
            </Link>
          </Button>
          <Button
            type="button"
            variant="default"
            asChild
            size="sm"
            className="hover:bg-zinc-50 bg-transparent border border-transparent hover:border hover:text-zinc-700 hover:border-zinc-300 hover:border-zinc-300/90"
          >
            <Link
              className="text-sm text-zinc-700 font-medium hover:text-zinc-700/90"
              href="/"
            >
              Contact us
            </Link>
          </Button>
          <Button
            type="button"
            variant="default"
            asChild
            size="sm"
            className="hover:bg-zinc-50 bg-transparent border border-transparent hover:border hover:text-zinc-700 hover:border-zinc-300 hover:border-zinc-300/90"
          >
            <Link
              className="text-sm text-zinc-700 font-medium hover:text-zinc-700/90"
              href="/"
            >
              Help center
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
