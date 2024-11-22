import AddressList from './AddressList'
import NavList from './NavList'
import SocialLinks from './SocialLinks'

type Menu = { isOpen: boolean }
export default function MobileModal({ isOpen }: Menu) {
  return (
    <div
      className={`fixed bottom-28 left-0 z-50 h-screen w-full bg-spanishGray transition-all
        ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className='flex flex-col items-center gap-12 pt-40 text-white'>
        <NavList />
        <button
          className='flex items-center rounded bg-black px-20 py-4 font-manrope uppercase'
          type='button'>
          Замовити
        </button>
        <AddressList />
        <SocialLinks />
      </div>
    </div>
  )
}
