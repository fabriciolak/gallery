'use client'

import * as React from 'react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link = React.forwardRef<HTMLAnchorElement, NextLinkProps & LinkProps>(
  ({ ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        {...props}
        passHref
        className="focus:ring-2 focus:ring-offset-1 focus:ring-zinc-400 focus:rounded-sm outline-none"
      >
        <a>Home</a>
      </NextLink>
    )
  },
)

Link.displayName = 'Link'

export { Link }
