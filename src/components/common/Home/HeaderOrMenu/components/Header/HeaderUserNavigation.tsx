import NavItemsList from './NavItemsList'

export default function HeaderNavigation() {
  return (
    <nav className='absolute left-1/2 -translate-x-1/2'>
      <ul className='flex items-center gap-2'>
        <NavItemsList />
      </ul>
    </nav>
  )
}
