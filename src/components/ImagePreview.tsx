import * as React from 'react'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'
import { tw } from '@/lib/utils'
import { Link, type LinkProps } from './Link'
// import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

type GenericHTMLType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>

const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
  
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
          'rounded w-full focus-within:ring-2 focus-within:ring-zinc-400 focus-within:ring-offset-2',
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
          'text-xs mt-2 text-zinc-700/80 group-hover:text-zinc-700/100 font-medium line-clamp-2 text-left',
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
        'text-sm mt-2 text-zinc-700 font-semibold text-left',
        className,
      )}
    >
      {children}
    </p>
  )
})

Author.displayName = 'Author'

export { Root, Image, Description, Author }
