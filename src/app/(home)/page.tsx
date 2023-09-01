import * as React from 'react'
import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { tw } from '#/lib/utils'
import { Search } from 'lucide-react'

import Image from 'next/image'
import OceanFloorImage from '#/assets/images/islands-of-neom-neom-saudi-arabia.jpg'

export default function Page() {
  return (
    <div className="w-full h-full xl:w-content xl:mx-auto space-y-12 py-6">
      {/* Heading */}
      <div className="w-full xl:w-heading-size xl:mx-auto p-6 xl:p-4 flex flex-col gap-6">
        <div className="w-full space-y-6">
          <h1 className="font-bold text-6xl text-center">
            Find Stunning Images in a Snap!
          </h1>
          <p className="font-medium text-lg text-center">
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
                role="https://unsplash.com/developers"
                className="text-lg font-medium px-0"
              >
                The Unsplash API
              </Link>
            </Button>
            .
          </p>
        </div>

        {/* Search input */}
        <form
          className={tw(
            'w-full p-2 flex justify-center gap-2 items-center rounded-lg',
            'border border-zinc-400 focus-within:ring focus-within:ring-offset-2 focus-within:ring-zinc-400',
          )}
        >
          <Button type="submit" className="w-11 h-11">
            <Search className="h-5 w-5  text-zinc-500" />
          </Button>

          <input
            type="text"
            placeholder="Search for an image"
            className="flex-1 px-4 py-2 rounded-lg text-lg outline-none text-zinc-700 font-medium placeholder:text-zinc-400"
          />
        </form>

        {/* Categories */}
        <div role="categories" className="flex gap-2 w-full">
          <Button type="button" variant="outline" size="sm" asChild>
            <Link href="/">Nature</Link>
          </Button>
          <Button type="button" variant="outline" size="sm" asChild>
            <Link href="/">Health and wellness</Link>
          </Button>
          <Button type="button" variant="outline" size="sm" asChild>
            <Link href="/">3D Renders</Link>
          </Button>
          <Button type="button" variant="outline" size="sm" asChild>
            <Link href="/">Film</Link>
          </Button>
        </div>
      </div>

      {/* Masonry layout */}

      <div className="w-full text-center">
        <span className="font-medium text-xs">Search for images for free</span>
        <div className="w-full xl:p-4 grid grid-cols-2 xl:grid-cols-3 grid-rows-2"></div>
      </div>
    </div>
  )
}
