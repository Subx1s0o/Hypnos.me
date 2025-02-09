import React from 'react'
import Link from 'next/link'

import { navigationData as data } from '@/components/common/Home/HeaderOrMenu/components/data/navigation-data'
import { useModal } from '@/components/helpers/ModalContext'
import Icon from '@/components/ui/Icon'
import { Tooltip } from '@/components/ui/Tooltip'

const NavItemsList = () => {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      {data.map(({ id, label, iconActive, iconDefault, isLink }) => (
        <li key={id}>
          <Tooltip content={label}>
            {isLink ? (
              <Link
                className='block p-3'
                href={id}>
                <Icon
                  id={iconDefault}
                  w={18}
                  h={18}
                />
              </Link>
            ) : (
              <button
                className='p-3'
                onClick={() => toggleModal(id)}
                type='button'>
                <Icon
                  id={isModalOpen(id) ? iconActive : iconDefault}
                  w={18}
                  h={18}
                />
              </button>
            )}
          </Tooltip>
        </li>
      ))}
    </>
  )
}

export default NavItemsList
