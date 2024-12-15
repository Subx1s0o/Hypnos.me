import React from 'react'
import { animated, useTransition } from '@react-spring/web'

import { Media, MediaContextProvider } from '@/components/helpers/Media'
import { useModal } from '@/components/helpers/ModalContext'

import BurgerModal from './BurgerModal/BurgerModal'
import CartModal from './CartModal/CartModal'
import SearchModal from './SearchModal/SearchModal'
import SearchModalDesktop from './SearchModal/SearchModalDesktop'

export default function ModalManager() {
  const { isModalOpen, toggleModal } = useModal()

  const modals = [
    {
      name: 'burger',
      className:
        'flex h-full flex-col items-center gap-12 bg-grey-400 p-12 text-white',
      backdrop: 'fixed inset-0 z-50 flex justify-end bg-grey-400/75'
    },
    {
      name: 'cart',
      className: 'relative md:w-[30rem] w-96 bg-white  shadow-lg',
      backdrop: 'fixed inset-0 z-50 flex justify-end bg-grey-400/75'
    },
    {
      name: 'search',
      className: 'relative w-96 bg-white  shadow-lg',
      backdrop: 'fixed inset-0 z-50 flex justify-end bg-grey-400/75'
    },
    {
      name: 'searchD',
      className: 'w-[490px] m-auto',
      backdrop: 'fixed inset-0 z-50 bg-white mt-40 h-[320px]'
    }
  ]
  const transitions = useTransition(
    modals.filter(modal => isModalOpen(modal.name)),
    {
      from: modal =>
        modal.name === 'searchD'
          ? { transform: 'translateY(-100%)', opacity: 0 }
          : { transform: 'translateX(100%)', opacity: 0 },

      enter: modal =>
        modal.name === 'searchD'
          ? { transform: 'translateY(0%)', opacity: 1 }
          : { transform: 'translateX(0%)', opacity: 1 },
      leave: modal =>
        modal.name === 'searchD'
          ? { transform: 'translateY(-100%)', opacity: 0 }
          : { transform: 'translateX(100%)', opacity: 0 },
      keys: modal => modal.name
    }

    // {
    //   from: { transform: 'translateX(100%)', opacity: 0 },
    //   enter: { transform: 'translateX(0%)', opacity: 1 },
    //   leave: { transform: 'translateX(100%)', opacity: 0 },
    //   keys: modal => modal.name
    // }
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
                  {modal.name === 'searchD' && <SearchModalDesktop />}
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
                {modal.name === 'search' && <SearchModal />}
              </animated.div>
            </div>
          ))}
        </Media>
      </MediaContextProvider>
    </>
  )
}
