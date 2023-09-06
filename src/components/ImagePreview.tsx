import * as React from 'react'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'
import { tw } from '@/lib/utils'

type GenericHTMLType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>

const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div className={className} {...props} ref={ref}>
      {children}
    </div>
  )
})

Root.displayName = 'Root'

const Image = React.forwardRef<HTMLImageElement, NextImageProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <NextImage
        ref={ref}
        {...props}
        className={tw(
          'w-full rounded focus-within:ring-2 focus-within:ring-zinc-400 focus-within:ring-offset-2',
          className,
        )}
      >
        {children}
      </NextImage>
    )
  },
)

Image.displayName = 'Image'

const Description = React.forwardRef<HTMLElement, GenericHTMLType>(
  ({ children, className, ...props }, ref) => {
    return (
      <figcaption
        ref={ref}
        {...props}
        className={tw(
          'mt-2 line-clamp-2 text-left text-xs font-medium text-zinc-700/80 group-hover:text-zinc-700/100',
          className,
        )}
      >
        {children}
      </figcaption>
    )
  },
)

Description.displayName = 'Description'

const Author = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      {...props}
      className={tw(
        'mt-2 text-left text-sm font-semibold text-zinc-700',
        className,
      )}
    >
      {children}
    </p>
  )
})

Author.displayName = 'Author'

export { Root, Image, Description, Author }
