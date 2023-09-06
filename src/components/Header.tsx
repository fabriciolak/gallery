import * as React from 'react'
import { Link } from '@/components/Link'
import { Button } from '@/components/Button'

export function Header() {
  return (
    <header className="h-20 w-full">
      <div
        role="navigation"
        className="flex h-full flex-1 items-center justify-between p-6 xl:mx-auto xl:w-content xl:p-4"
      >
        <h2 title="Gallery" className="text-2xl font-bold">
          <Link href="/">Gallery</Link>
        </h2>

        <nav className="flex gap-1">
          <Button
            type="button"
            variant="default"
            asChild
            size="sm"
            className="border border-transparent bg-transparent hover:border hover:border-zinc-300 hover:border-zinc-300/90 hover:bg-zinc-50 hover:text-zinc-700"
          >
            <Link
              className="text-sm font-medium text-zinc-700 hover:text-zinc-700/90"
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
            className="border border-transparent bg-transparent hover:border hover:border-zinc-300 hover:border-zinc-300/90 hover:bg-zinc-50 hover:text-zinc-700"
          >
            <Link
              className="text-sm font-medium text-zinc-700 hover:text-zinc-700/90"
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
            className="border border-transparent bg-transparent hover:border hover:border-zinc-300 hover:border-zinc-300/90 hover:bg-zinc-50 hover:text-zinc-700"
          >
            <Link
              className="text-sm font-medium text-zinc-700 hover:text-zinc-700/90"
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
