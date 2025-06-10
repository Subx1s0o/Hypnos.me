import React, { useEffect, useRef } from 'react'
import { animated, useTransition } from '@react-spring/web'
import { usePathname } from 'next/navigation'

import { useModal } from '@/components/context/ModalContext'
import { Media, MediaContextProvider } from '@/components/helpers/Media'

import BurgerModal from './BurgerModal/BurgerModal'
import CartModal from './CartModal/CartModal'
import RingSizeModal from './RingSizeModal/RingSizeModal'
import SearchModal from './SearchModal/SearchModal'
import WishlistModal from './WishlistModal/WishlistModal'

const modals = [
  {
    name: 'cart',
    className: 'relative size-full bg-white p-6 shadow-lg md:w-[30rem]',
    backdrop: 'fixed inset-0 z-20 flex items-center justify-end bg-grey-400/75'
  },
  {
    name: 'wishlist',
    className: 'relative size-full bg-white p-6 shadow-lg md:w-[30rem]',
    backdrop: 'fixed inset-0 z-20 flex items-center justify-end bg-grey-400/75'
  },
  {
    name: 'burger',
    className:
      'flex h-full flex-col items-center gap-12 bg-grey-400 p-12 text-white',
    backdrop:
      'fixed inset-0 z-50 flex justify-end bg-grey-400/75 bottom-26 md:bottom-0'
  },
  {
    name: 'search',
    className:
      'relative w-96 bg-white  shadow-lg lg:h-[320px]  h-full lg:w-full',
    backdrop:
      'fixed inset-0 z-50 flex justify-end bg-grey-400/75  lg:mt-[130px] bottom-26 md:bottom-0'
  },
  {
    name: 'ringSize',
    className:
      'relative x-full y-[200px] bg-white p-3 md:p-6 shadow-lg md:w-[30rem]',
    backdrop:
      'fixed inset-0 z-20 flex items-center justify-center bg-grey-400/75'
  }
]

export default function ModalManager() {
  const pathname = usePathname()
  const {
    isModalOpen,
    toggleModal,
    closeModal,
    modals: activeModals
  } = useModal()

  const prevPathnameRef = useRef<string | null>(null)

  useEffect(() => {
    if (pathname !== prevPathnameRef.current) {
      Object.keys(activeModals).forEach(modalName => {
        if (activeModals[modalName]) {
          closeModal(modalName)
        }
      })
      prevPathnameRef.current = pathname
    }
  }, [pathname, activeModals, closeModal])

  const transitions = useTransition(
    modals.filter(modal => isModalOpen(modal.name)),
    {
      from: modal =>
        modal.name === 'search'
          ? { transform: 'translateY(-10%)', opacity: 0 }
          : { transform: 'translateX(100%)', opacity: 0 },

      enter: modal =>
        modal.name === 'search'
          ? { transform: 'translateY(0%)', opacity: 1 }
          : { transform: 'translateX(0%)', opacity: 1 },
      leave: modal =>
        modal.name === 'search'
          ? { transform: 'translateY(-10%)', opacity: 0 }
          : { transform: 'translateX(100%)', opacity: 0 },
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
                className={modal.backdrop}
                onClick={() => toggleModal(modal.name)}>
                <animated.div
                  onClick={e => e.stopPropagation()}
                  key={modal.name}
                  style={style}
                  className={modal.className}>
                  {modal.name === 'cart' && <CartModal />}
                  {modal.name === 'wishlist' && <WishlistModal />}
                  {modal.name === 'search' && <SearchModal />}
                  {modal.name === 'ringSize' && <RingSizeModal />}
                </animated.div>
              </div>
            </>
          ))}
        </Media>
        <Media lessThan='md'>
          {transitions((style, modal) => (
            <div
              className={modal.backdrop}
              onClick={() => toggleModal(modal.name)}>
              <animated.div
                onClick={e => e.stopPropagation()}
                key={modal.name}
                style={style}
                className={modal.className}>
                {modal.name === 'burger' && <BurgerModal />}
                {modal.name === 'cart' && <CartModal />}
                {modal.name === 'wishlist' && <WishlistModal />}
                {modal.name === 'search' && <SearchModal />}
                {modal.name === 'ringSize' && <RingSizeModal />}
              </animated.div>
            </div>
          ))}
        </Media>
      </MediaContextProvider>
    </>
  )
}
