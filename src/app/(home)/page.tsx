import * as React from 'react'
import NextImage from 'next/image'

import { DownloadIcon, Search } from 'lucide-react'

import api from '@/lib/api'
import { tw } from '@/lib/utils'
import { Link } from '@/components/Link'
import { Button } from '@/components/Button'
import { UnsplashPhotoResponse } from '@/@types/unsplash'

export default async function Page() {
  const response = await api.get<UnsplashPhotoResponse[]>('/photos')
  const photos = response.data

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
                role="link"
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
          <Button type="submit" aria-label="submit" className="w-11 h-11">
            <Search className="h-5 w-5  text-zinc-500" />
          </Button>

          <input
            type="text"
            placeholder="Search for an image"
            className="flex-1 px-4 py-2 rounded-lg text-lg outline-none text-zinc-700 font-medium placeholder:text-zinc-400"
          />
        </form>

        {/* Categories */}
        <div role="navigation" className="flex gap-2 w-full">
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
        <div className="w-full xl:p-4 p-6 columns-1 md:columns-2 lg:columns-3 items-start gap-x-6">
          {photos.map((photo) => (
            <div key={photo.id} className="py-4 group relative">
              <figure className="focus-within:ring line-clamp-2 focus-within:ring-zinc-400 focus-within:ring-offset-2 rounded-sm">
                <div>
                  <Link
                    title={photo.description}
                    href={photo.links.html}
                    aria-label={
                      photo.description || `${photo.user.name}'s image`
                    }
                  >
                    <NextImage
                      src={photo.urls.regular}
                      alt={photo.description || `${photo.user.name}'s image`}
                      width={photo.width}
                      height={photo.height}
                      className="rounded-sm"
                    />
                  </Link>
                </div>

                <div className="absolute hidden w-full bottom-8 px-4 group-hover:flex justify-between items-center">
                  <div className="flex items-center gap-2 justify-start">
                    <NextImage
                      src={photo.user.profile_image.large}
                      alt={`${photo.user.name}'s profile image`}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />

                    <Link href={photo.user.links.html}>
                      <div className="font-medium text-sm text-zinc-100">
                        {photo.user.name}
                      </div>
                      <div className="font-medium text-left text-xs text-zinc-100">
                        {photo.user.username}
                      </div>
                    </Link>
                  </div>

                  <Button
                    type="button"
                    variant="default"
                    className="h-8 w-8 rounded-full bg-zinc-100 hover:bg-zinc-300"
                  >
                    <DownloadIcon className="h-5 w-5 text-zinc-500 hover:text-zinc-700" />
                  </Button>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
