import { Link } from 'react-router-dom'

import Icon from '../features/Icon'

export default function HomeHeader() {
  return (
    <header className='hidden md:block'>
      <div className='px-10'>
        <ul>
          <li>
            <div className='flex'>
              <Icon
                id='icon-profile'
                w={24}
                h={24}
              />
              <Link to='/profile'>Profile</Link>
            </div>
          </li>
          <li>
            <div></div>
          </li>
        </ul>
      </div>
    </header>
  )
}
