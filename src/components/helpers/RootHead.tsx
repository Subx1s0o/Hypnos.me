'use client'

import { mediaStyles } from './Media'

function RootHead() {
  return (
    <head>
      <style
        key='fresnel-css'
        dangerouslySetInnerHTML={{ __html: mediaStyles }}
        type='text/css'
      />
    </head>
  )
}

export default RootHead
