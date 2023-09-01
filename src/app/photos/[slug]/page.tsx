interface PhotosProps {
  params: {
    slug: string
  }
}

export default function Photos({ params: { slug } }: PhotosProps) {
  return (
    <div>
      <h2>{slug}</h2>
    </div>
  )
}
