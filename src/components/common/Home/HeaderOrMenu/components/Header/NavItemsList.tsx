import React from 'react'
import useCart from '@/app/(store)/store'
import Link from 'next/link'

import { navigationData as data } from '@/components/common/Home/HeaderOrMenu/components/data/navigation-data'
import { useModal } from '@/components/helpers/ModalContext'
import Icon from '@/components/ui/Icon'
import { Tooltip } from '@/components/ui/Tooltip'

const NavItemsList = () => {
  const { isModalOpen, toggleModal } = useModal()
  const cartItems = useCart(state => state.cart.length)

  return (
    <>
      {data.map(({ id, label, iconActive, iconDefault, isLink, showBadge }) => (
        <li key={id}>
          <Tooltip content={label}>
            {isLink ? (
              <Link
                className='block px-3 py-[10px]'
                href={id}>
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
                    {cartItems > 0 && (
                      <div
                        className='absolute flex size-4 items-center justify-center rounded-full bg-brown
                          align-middle'>
                        <p className='text-xxs font-manrope text-white'>
                          {cartItems}
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
// className='text-xxs  font-manrope text-white'>
