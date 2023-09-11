'use client'

import React from 'react'
import NextImage from 'next/image'

import { useInfiniteQuery } from '@tanstack/react-query'
import { DownloadIcon } from 'lucide-react'

import api from '@/lib/api'
import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { UnsplashSearchPhotoResponse } from '@/@types/unsplash'

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
  // const [orderBy, setOrderBy] = React.useState<string>('relevant')

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

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    isRefetchError,
  } = useInfiniteQuery({
    queryKey: ['photos', slug],
    queryFn: fetchImages,
    getNextPageParam: (lastPage) => lastPage.nextPage + 1,
  })

  const formattedData = React.useMemo(() => {
    const formatted = data?.pages.flatMap((data) => data.results.results.flat())

    return formatted
  }, [data])

  const formattedResultsSearch = React.useMemo(() => {
    const photosResultLength =
      data?.pages[0].results.total && data?.pages[0].results?.total >= 1000
        ? '+1000'
        : data?.pages[0].results.total

    const peoplesImages = data?.pages[0].results.results.map((a) => a.user)
      .length
    return `${photosResultLength} photos from ${peoplesImages} people`
  }, [data])

  if (isRefetching && !isRefetchError) {
    return <div>Refetching</div>
  }

  return (
    <div className="h-full w-full space-y-12 py-6 xl:mx-auto xl:w-content">
      <div className="mt-6 flex w-full flex-col gap-6 p-6 xl:mx-auto xl:p-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-zinc-700 first-letter:uppercase">
            {slug}
          </h1>
          <span className="text-lg font-medium text-zinc-500">
            Showing results for <span>{slug}</span>
          </span>
          <span className="mt-1 text-sm font-normal text-zinc-400">
            {formattedResultsSearch}
          </span>
        </div>

        <div className="mt-4 space-x-4">
          <Button
            variant="default"
            type="button"
            aria-label="Popular"
            size="md"
            // onClick={() => setOrderBy('relevant-1')}
          >
            Popular
          </Button>
          <Button
            variant="outline"
            type="button"
            aria-label="Recent"
            size="md"
            // onClick={() => setOrderBy('latest-2')}
          >
            Recent
          </Button>
        </div>

        <div>
          <div className="w-full columns-1  items-start gap-x-6 md:columns-2 lg:columns-3">
            {formattedData &&
              formattedData.map((photo) => (
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
                          alt={
                            photo.description || `${photo.user.name}'s image`
                          }
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

          <div className="mt-6 flex w-full justify-center">
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
                : null}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
