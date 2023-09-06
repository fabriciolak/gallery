'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

import { Search } from 'lucide-react'

import { tw } from '@/lib/utils'
import { Link } from '@/components/Link'
import { Button } from '@/components/Button'
import { GridMasonry } from './grid-masonry'

export default function Page() {
  const router = useRouter()
  const [search, setSearch] = React.useState('')

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    router.push(`/photos/${search}`)
  }

  return (
    <div className="h-full w-full space-y-12 py-6 xl:mx-auto xl:w-content">
      {/* Heading */}
      <div className="flex w-full flex-col gap-6 p-6 xl:mx-auto xl:w-heading-size xl:p-4">
        <div className="w-full space-y-6">
          <h1 className="text-center text-6xl font-bold">
            Find Stunning Images in a Snap!
          </h1>
          <p className="text-center text-lg font-medium">
            Unlock Beauty. Powered by{' '}
            <Button
              name="Unsplash website"
              asChild
              type="button"
              variant="link"
            >
              <Link
                href="https://unsplash.com/developers"
                target="_blank"
                rel="noreferrer"
                role="link"
                className="px-0 text-lg font-medium"
              >
                The Unsplash API
              </Link>
            </Button>
            .
          </p>
        </div>

        {/* Search input */}
        <form
          onSubmit={handleSubmit}
          className={tw(
            'flex w-full items-center justify-center gap-2 rounded-lg p-2',
            'border border-zinc-400 focus-within:ring focus-within:ring-zinc-400 focus-within:ring-offset-2',
          )}
        >
          <Button type="submit" aria-label="submit" className="h-11 w-11">
            <Search className="h-5 w-5  text-zinc-500" />
          </Button>

          <input
            type="text"
            placeholder="Search for an image"
            className="flex-1 rounded-lg px-4 py-2 text-lg font-medium text-zinc-700 outline-none placeholder:text-zinc-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        {/* Categories */}
        <div role="navigation" className="flex w-full gap-2">
          <Button type="button" variant="outline" size="sm" asChild>
            <Link href="/photos/nature">Nature</Link>
          </Button>
          <Button type="button" variant="outline" size="sm" asChild>
            <Link href="/photos/health-and-wellness">Health and wellness</Link>
          </Button>
          <Button type="button" variant="outline" size="sm" asChild>
            <Link href="/photos/3d-renders">3D Renders</Link>
          </Button>
          <Button type="button" variant="outline" size="sm" asChild>
            <Link href="/photos/film">Film</Link>
          </Button>
        </div>
      </div>

      {/* Masonry layout */}

      <GridMasonry />
    </div>
  )
}
