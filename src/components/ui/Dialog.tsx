'use client'

import { MouseEventHandler, useCallback, useEffect, useRef } from 'react'
import { animated, useTransition } from '@react-spring/web'
import { useRouter } from 'next/navigation'

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick: MouseEventHandler = useCallback(
    e => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper]
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)

      document.body.style.overflow = 'auto'
    }
  }, [onKeyDown])

  const transitions = useTransition(true, {
    from: { transform: 'translateX(100%)', opacity: 0 },
    enter: { transform: 'translateX(0%)', opacity: 1 },
    leave: { transform: 'translateX(100%)', opacity: 0 }
  })

  return transitions(
    (styles, item) =>
      item && (
        <animated.div
          ref={overlay}
          className='absolute inset-0 z-20 flex items-center justify-end bg-grey-400/75'
          onClick={onClick}
          style={styles}>
          <animated.div
            ref={wrapper}
            className='relative w-full bg-white p-6 shadow-lg md:w-[30rem]'
            style={styles}>
            {children}
          </animated.div>
        </animated.div>
      )
  )
}
