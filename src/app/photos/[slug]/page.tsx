'use client'

import {
  UnsplashSearchPhotoResponse,
  UnsplashPhotoResponse,
} from '@/@types/unsplash'
import { Button } from '@/components/Button'
import { GridMasonry } from '@/components/GridMasonry'
import { Link } from '@/components/Link'
import api from '@/lib/api'
import { useInfiniteQuery } from '@tanstack/react-query'
import { DownloadIcon } from 'lucide-react'
import NextImage from 'next/image'
import React from 'react'

interface PageProps {
  params: {
    slug: string
  }
}

type UsePhotoResponse = {
  nextPage: number
  results: UnsplashSearchPhotoResponse
}

export default function Page({ params: { slug } }: PageProps) {
  const fetchImages = async ({ pageParam = 1 }): Promise<UsePhotoResponse> => {
    const { data } = await api.get<UnsplashSearchPhotoResponse>(
      `/search/photos`,
      {
        params: {
          query: slug,
          per_page: 10,
          page: pageParam,
        },
      },
    )

    return {
      nextPage: pageParam,
      results: data,
    }
  }

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['photos', slug],
      queryFn: fetchImages,
      // queryFn: fetchImages,
      getNextPageParam: (lastPage) => lastPage.nextPage + 1,
    })

  const formattedData = React.useMemo(() => {
    const formatted = data?.pages.flatMap((data) => data.results.results.flat())
    return formatted
  }, [data])

  return (
    <div className="w-full h-full xl:w-content xl:mx-auto space-y-12 py-6">
      <div className="w-full xl:mx-auto p-6 xl:p-4 flex flex-col mt-6 gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-zinc-700 first-letter:uppercase">
            {slug}
          </h1>
          <span className="text-lg font-medium text-zinc-500">
            Showing results for <span>{slug}</span>
          </span>
          <span className="text-sm mt-1 font-normal text-zinc-400">
            {data?.pages[0].results.total &&
            data?.pages[0].results?.total >= 1000
              ? '+1000'
              : data?.pages[0].results.total}
            photos from{' '}
            {data?.pages[0].results.results.map((a) => a.user).length} people
          </span>
        </div>

        <div className="mt-4 space-x-4">
          <Button
            variant="default"
            type="button"
            aria-label="Popular"
            size="md"
          >
            Popular
          </Button>
          <Button
            variant="outline"
            type="button"
            aria-label="Recent"
            size="md"
            // className="hover:bg-zinc-900/90"
          >
            Recent
          </Button>
        </div>

        <div>
          {/* <GridMasonry results={data?.pages[0].results} isLoading={isLoading} /> */}
          <div className="w-full  columns-1 md:columns-2 lg:columns-3 items-start gap-x-6">
            {formattedData &&
              formattedData.map((photo) => (
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
                          alt={
                            photo.description || `${photo.user.name}'s image`
                          }
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

          <div className="mt-6 w-full flex justify-center">
            <Button
              variant="default"
              size="md"
              disabled={!hasNextPage || isFetchingNextPage}
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage
                ? 'Carregando mais...'
                : hasNextPage
                ? 'Carregar mais'
                : 'Nada mais para carregar.'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <Button
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? 'Carregando mais...'
          : hasNextPage
          ? 'Carregar mais'
          : 'Nada mais para carregar.'}
      </Button>
    </div>
  )
}
