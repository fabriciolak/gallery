'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'

export default function NotFound() {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 })
  React.useMemo(() => {
    const handleMousePos = (event: MouseEvent) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      })
    }
    window.addEventListener('mousemove', handleMousePos)
    return () => {
      window.removeEventListener('mousemove', handleMousePos)
    }
  }, [])

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-900">
      <div
        className="absolute inset-0 z-20"
        style={{
          background: `radial-gradient(circle closest-corner at ${coords.x}px ${coords.y}px, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 66%)`,
        }}
      ></div>
      <Image
        src="https://images.unsplash.com/photo-1634034464556-56964a7dcc69?auto=format&fit=fill&w=1600&h=1200&q=20"
        alt="Abandoned building's staircases in Aveiro."
        fill
        className="select-none"
        objectFit="cover"
      />

      <div className="z-20 flex flex-col items-center justify-center gap-6">
        <h2 className="animate-glowing-text text-6xl font-bold text-white [text-shadow:0px_0px_0px_#fff]">
          Page not found
        </h2>
        <span className="text-zinc-100">
          Hmm, the page you were looking for does not exist.
        </span>
        <Button
          variant="default"
          size="md"
          className="bg-zinc-200 text-zinc-700 hover:bg-zinc-400 hover:text-zinc-900/80"
          asChild
        >
          <Link href="/" className="font-normal">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
