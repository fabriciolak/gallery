'use client'

import NextImage from 'next/image'
import { DownloadIcon, Loader } from 'lucide-react'
import { Button } from './Button'
import { Link } from './Link'
import { UnsplashSearchPhotoResponse } from '@/@types/unsplash'

interface GridMasonryProps {
  results: UnsplashSearchPhotoResponse | undefined
  isLoading: boolean
}

export function GridMasonry({ isLoading, results }: GridMasonryProps) {
  return (
    <>
      {isLoading ? (
        <div className="mt-20 flex w-full items-center justify-center">
          <Loader className="h-6 w-6 animate-spin text-zinc-700" />
        </div>
      ) : (
        <>
          <div className="w-full  columns-1 items-start gap-x-6 md:columns-2 lg:columns-3">
            {results?.results.map((photo) => (
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
          <div></div>
        </>
      )}
    </>
  )
}
