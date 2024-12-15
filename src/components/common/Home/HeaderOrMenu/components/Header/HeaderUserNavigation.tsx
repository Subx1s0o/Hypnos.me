import Link from 'next/link'

import { navigationData as data } from '@/components/common/Home/HeaderOrMenu/components/data/navigation-data'
import { useModal } from '@/components/helpers/ModalContext'
import Icon from '@/components/ui/Icon'
import { Tooltip } from '@/components/ui/Tooltip'

export default function HeaderNavigation() {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <nav className='absolute left-1/2 -translate-x-1/2'>
      <ul className='flex items-center gap-2'>
        {data.map(({ id, label, iconActive, iconDefault }) => (
          <li key={id}>
            <Tooltip content={label}>
              {id === 'favorites' || id === 'profile' ? (
                <Link
                  className='block p-3'
                  href={id === 'favorites' ? '/favorites' : '/profile'}>
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

        <li>
          <Tooltip content='Search...'>
            <button
              className='p-3'
              onClick={() => toggleModal('searchD')}
              type='button'>
              <Icon
                id='icon-search'
                w={18}
                h={18}
              />
            </button>
          </Tooltip>
        </li>
      </ul>
    </nav>
  )
}
