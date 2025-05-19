'use client'

import { createMedia } from '@artsy/fresnel'

const AppMedia = createMedia({
  breakpoints: {
    zero: 0,
    sm: 480,
    md: 768,
    xmd: 900,
    lg: 1024,
    xl: 1280
  }
})

export const mediaStyles = AppMedia.createMediaStyle()

export const { Media, MediaContextProvider } = AppMedia
