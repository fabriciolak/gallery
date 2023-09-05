'use client'

import NextImage from 'next/image'
import { DownloadIcon, Loader } from 'lucide-react'
import { Button } from './Button'
import { Link } from './Link'
import {
  UnsplashPhotoResponse,
  UnsplashSearchPhotoResponse,
} from '@/@types/unsplash'
import { InfiniteData } from '@tanstack/react-query'
import { useEffect } from 'react'

interface GridMasonryProps {
  results: UnsplashSearchPhotoResponse | undefined
  isLoading: boolean
}

export function GridMasonry({ isLoading, results }: GridMasonryProps) {
  return (
    <>
      {isLoading ? (
        <div className="mt-20 w-full flex justify-center items-center">
          <Loader className="animate-spin w-6 h-6 text-zinc-700" />
        </div>
      ) : (
        <>
          <div className="w-full  columns-1 md:columns-2 lg:columns-3 items-start gap-x-6">
            {results?.results.map((photo) => (
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
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
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
          <div></div>
        </>
      )}
    </>
  )
}
