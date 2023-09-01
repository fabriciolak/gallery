import * as React from 'react'
import { tw } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: [
    'rounded-lg cursor-pointer inline-flex justify-center items-center font-semibold text-zinc-100',
    'focus-visible:ring focus-visible:ring-zinc-400 focus-visible:ring-offset-2 active:opacity-80 disabled:opacity-50 disabled:pointer-events-none',
  ],
  variants: {
    variant: {
      default: 'bg-zinc-900 hover:bg-zinc-900/90',
      outline: 'border text-zinc-700 border-zinc-300 hover:border-zinc-300/90',
      link: 'text-zinc-700 hover:underline underline-offset-4',
    },
    size: {
      sm: 'px-2 py-1 text-xs',
      md: 'px-4 py-2 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={tw(buttonVariants({ className, variant, size }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button }
