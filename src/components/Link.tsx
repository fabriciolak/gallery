'use client'

import * as React from 'react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { tw } from '@/lib/utils'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link = React.forwardRef<HTMLAnchorElement, NextLinkProps & LinkProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <NextLink
        {...props}
        passHref
        ref={ref}
        className={tw(
          'rounded-sm outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-1',
          className,
        )}
      >
        {/* <span>{children}</span> */}
        {children}
      </NextLink>
    )
  },
)

Link.displayName = 'Link'

export { Link }
