import React from 'react'
import { animated, useTransition } from '@react-spring/web'

import { Media, MediaContextProvider } from '@/components/helpers/Media'
import { useModal } from '@/components/helpers/ModalContext'

import BurgerModal from './BurgerModal/BurgerModal'
import CartModal from './CartModal/CartModal'

export default function ModalManager() {
  const { isModalOpen, toggleModal } = useModal()

  const modals = [
    {
      name: 'burger',
      className:
        'flex h-full flex-col items-center gap-12 bg-grey-400 p-12 text-white'
    },
    {
      name: 'cart',
      className: 'relative md:w-[30rem] w-96 bg-white  shadow-lg'
    },
    {
      name: 'search',
      className: 'relative md:w-[30rem] w-96 bg-white  shadow-lg'
    }
  ]
  const transitions = useTransition(
    modals.filter(modal => isModalOpen(modal.name)),
    {
      from: { transform: 'translateX(100%)', opacity: 0 },
      enter: { transform: 'translateX(0%)', opacity: 1 },
      leave: { transform: 'translateX(100%)', opacity: 0 },
      keys: modal => modal.name
    }
  )

  return (
    <>
      <MediaContextProvider>
        <Media greaterThanOrEqual='md'>
          {transitions((style, modal) => (
            <>
              <div
                className='fixed inset-0 z-50 flex justify-end bg-grey-400/75'
                onClick={() => toggleModal(modal.name)}>
                <animated.div
                  onClick={e => e.stopPropagation()}
                  key={modal.name}
                  style={style}
                  className={modal.className}>
                  {modal.name === 'cart' && <CartModal />}
                  {modal.name === 'search' && <p>Search</p>}
                </animated.div>
              </div>
            </>
          ))}
        </Media>
        <Media lessThan='md'>
          {transitions((style, modal) => (
            <div
              className='fixed inset-0 bottom-28 z-50 flex justify-end bg-grey-400/75'
              onClick={() => toggleModal(modal.name)}>
              <animated.div
                onClick={e => e.stopPropagation()}
                key={modal.name}
                style={style}
                className={modal.className}>
                {modal.name === 'burger' && <BurgerModal />}
                {modal.name === 'cart' && <CartModal />}
                {modal.name === 'search' && <p>Search</p>}
              </animated.div>
            </div>
          ))}
        </Media>
      </MediaContextProvider>
    </>
  )
}
