import React from 'react'
import useCart from '@/store/cart/cart'
import Link from 'next/link'

import { navigationData as data } from '@/components/common/Home/HeaderOrMenu/components/data/navigation-data'
import { useModal } from '@/components/context/ModalContext'
import Icon from '@/components/ui/Icon'
import { Tooltip } from '@/components/ui/Tooltip'

const NavItemsList = () => {
  const { isModalOpen, toggleModal } = useModal()
  const cartItems = useCart(state => state.cart)

  const totalCount = cartItems.reduce((acc, item) => {
    if (item.cartCount) {
      return acc + item.cartCount
    }

    return acc
  }, 0)

  return (
    <>
      {data.map(({ id, label, iconActive, iconDefault, isLink, showBadge }) => (
        <li key={id}>
          <Tooltip content={label}>
            {isLink ? (
              <Link
                className='block p-3'
                href={`/${id}`}>
                <Icon
                  id={iconDefault}
                  w={18}
                  h={18}
                />
              </Link>
            ) : (
              <div>
                <button
                  className='px-3 py-[10px]'
                  onClick={() => toggleModal(id)}
                  type='button'>
                  <Icon
                    id={isModalOpen(id) ? iconActive : iconDefault}
                    w={18}
                    h={18}
                  />
                </button>
                {showBadge && (
                  <div className='relative grid place-items-center'>
                    {cartItems.length > 0 && (
                      <div
                        className='absolute flex size-4 items-center justify-center rounded-full bg-brown
                          align-middle'>
                        <p className='font-manrope text-xxs text-white'>
                          {totalCount}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </Tooltip>
        </li>
      ))}
    </>
  )
}

export default NavItemsList
