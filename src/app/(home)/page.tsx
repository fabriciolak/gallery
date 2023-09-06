'use client'

import * as React from 'react'
import NextImage from 'next/image'

import { DownloadIcon, Loader, Search } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'

import api from '@/lib/api'
import { tw } from '@/lib/utils'
import { Link } from '@/components/Link'
import { Button } from '@/components/Button'
import { UnsplashPhotoResponse } from '@/@types/unsplash'

export default function Page() {
  const { data: photos, isLoading } = useQuery({
    queryKey: ['photos'],
    queryFn: async () => {
      const response = await api.get<UnsplashPhotoResponse[]>('/photos')
      const data = response.data

      return data
    },
  })

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    console.log(event)
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

      <div className="w-full text-center">
        <span className="text-xs font-medium">Search for images for free</span>

        {isLoading ? (
          <div className="mt-20 flex w-full items-center justify-center">
            <Loader className="h-6 w-6 animate-spin text-zinc-700" />
          </div>
        ) : (
          <div className="w-full columns-1 items-start gap-x-6 p-6 md:columns-2 lg:columns-3 xl:p-4">
            {photos?.map((photo) => (
              <div key={photo.id} className="group relative py-4">
                <figure className="line-clamp-2 rounded-sm focus-within:ring focus-within:ring-zinc-400 focus-within:ring-offset-2">
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

                  <div className="absolute bottom-8 hidden w-full items-center justify-between px-4 group-hover:flex">
                    <div className="flex items-center justify-start gap-2">
                      <NextImage
                        src={photo.user.profile_image.large}
                        alt={`${photo.user.name}'s profile image`}
                        width={32}
                        height={32}
                        className="rounded-full"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
                      />

                      <Link href={photo.user.links.html}>
                        <div className="text-sm font-medium text-zinc-100">
                          {photo.user.name}
                        </div>
                        <div className="text-left text-xs font-medium text-zinc-100">
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
        )}
      </div>
    </div>
  )
}
