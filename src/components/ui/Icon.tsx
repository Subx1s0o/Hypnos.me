import { SpriteTypes } from '@/types'

interface IconProps {
  id: SpriteTypes
  w: number
  h: number
  className?: string
  classNameIcon?: string
}

export default function Icon({
  id,
  w,
  h,
  className,
  classNameIcon
}: IconProps) {
  return (
    <div className={className || ''}>
      <svg
        className={classNameIcon || ''}
        width={w}
        height={h}>
        <use href={`/sprite.svg#${id}`} />
      </svg>
    </div>
  )
}
