import React from 'react'
import { animated, useTransition } from '@react-spring/web'

import { useModal } from '@/components/helpers/ModalContext'

import BurgerModalAddress from './BurgerModalAddress'
import BurgerModalNavigation from './BurgerModalNavigation'
import BurgerModalSocialLinks from './BurgerModalSocialLinks'

export default function BurgerModal() {
  const { isModalOpen, toggleModal } = useModal()
  const transitions = useTransition(isModalOpen, {
    from: { transform: 'translateX(100%)', opacity: 0 },
    enter: { transform: 'translateX(0%)', opacity: 1 },
    leave: { transform: 'translateX(100%)', opacity: 0 }
  })

  return (
    <>
      {transitions((style, item) =>
        item ? (
          <div
            onClick={toggleModal}
            className='fixed inset-0 bottom-28 z-50 flex justify-end bg-grey-400/75'>
            <animated.div
              className='flex h-full flex-col items-center gap-12 bg-grey-400 p-12 text-white'
              style={style}
              onClick={e => e.stopPropagation()}>
              <BurgerModalNavigation />
              <BurgerModalAddress />
              <BurgerModalSocialLinks />
            </animated.div>
          </div>
        ) : null
      )}
    </>
  )
}
