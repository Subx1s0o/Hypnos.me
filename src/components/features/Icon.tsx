interface IconProps {
  id: string
  w: number
  h: number
  className?: string
}

export default function Icon({ id, w, h, className }: IconProps) {
  return (
    <svg
      width={w}
      height={h}
      className={className || ''}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  )
}
