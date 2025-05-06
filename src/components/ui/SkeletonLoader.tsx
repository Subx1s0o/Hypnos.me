import React from 'react'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

interface SkeletonLoaderProps {
  count?: number
  className?: string
  baseColor?: string
  highlightColor?: string
  duration?: number
}

export default function SkeletonLoader({
  count = 1,
  className = '',
  baseColor = '#E8E6E5',
  highlightColor = '#F3F1EF',
  duration = 1
}: SkeletonLoaderProps) {
  return (
    <div className={className}>
      <Skeleton
        baseColor={baseColor}
        highlightColor={highlightColor}
        duration={duration}
        count={count}
        className={className}
      />
    </div>
  )
}
