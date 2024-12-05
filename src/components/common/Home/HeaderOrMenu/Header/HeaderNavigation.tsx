import { useModal } from '@/components/helpers/ModalContext'
import Icon from '@/components/ui/Icon'
import { Tooltip } from '@/components/ui/Tooltip'

import { navigationData as data } from '../MobileMenu/data/navigation-data'

export default function HeaderNavigation() {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <nav className='absolute left-1/2 -translate-x-1/2'>
      <ul className='flex items-center gap-2'>
        {data.map(({ id, label, iconActive, iconDefault }) => (
          <li key={id}>
            <Tooltip content={label}>
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
            </Tooltip>
          </li>
        ))}
      </ul>
    </nav>
  )
}
