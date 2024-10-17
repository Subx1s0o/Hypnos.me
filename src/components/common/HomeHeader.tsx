import { Link } from 'react-router-dom'

import Icon from '../features/Icon'

export default function HomeHeader() {
  return (
    <header className='hidden md:visible'>
      <div className='px-10'>
        <ul>
          <li>
            <div className='flex'>
              <Icon
                id='icon-profile'
                w={18}
                h={18}
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
