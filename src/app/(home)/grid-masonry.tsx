'use client'

import React from 'react'
import NextImage from 'next/image'
import Link from 'next/link'

import { DownloadIcon, Loader } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'

import api from '@/lib/api'
import { Button } from '@/components/Button'
import { UnsplashPhotoResponse } from '@/@types/unsplash'

export const revalidate = 0

export function GridMasonry() {
  const { data: photos, isLoading } = useQuery({
    queryKey: ['photos'],
    queryFn: async () => {
      const response = await api.get<UnsplashPhotoResponse[]>('/photos')
      const data = response.data

      return data
    },
  })

  return (
    <div className="w-full text-center">
      <span className="text-xs font-medium">Search for images for free</span>

      {isLoading ? (
        <div className="mt-20 flex w-full items-center justify-center">
          <Loader className="h-6 w-6 animate-spin text-zinc-700" />
        </div>
      ) : (
        <div className="w-full columns-1 items-start gap-x-6 p-6 md:columns-2 lg:columns-3 xl:p-4">
          {photos?.map((photo) => {
            return (
              <div key={photo.id} className="group relative py-4">
                <figure className="line-clamp-2 rounded-sm focus-within:ring focus-within:ring-zinc-400 focus-within:ring-offset-2">
                  <div>
                    <Link
                      title={photo.description}
                      href={photo.links.html}
                      aria-label={
                        photo.description || `${photo.user.name}'s image`
                      }
                      prefetch={true}
                    >
                      <NextImage
                        src={photo.urls.regular}
                        alt={photo.description || `${photo.user.name}'s image`}
                        width={photo.width}
                        height={photo.height}
                        className="rounded-sm"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXA8AAesBNGQg4IAAAAAASUVORK5CYII="
                        priority
                      />
                    </Link>
                    <div className="absolute bottom-8 hidden w-full items-center justify-between px-4 group-hover:flex">
                      <div className="flex items-center justify-start gap-2">
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
                  </div>
                </figure>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// export const GridMasonry = React.memo(GridMasonryMemo)
