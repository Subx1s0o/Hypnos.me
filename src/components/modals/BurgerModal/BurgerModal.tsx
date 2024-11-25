import BurgerModalAddress from './BurgerModalAddress'
import BurgerModalNavigation from './BurgerModalNavigation'
import BurgerModalSocialLinks from './BurgerModalSocialLinks'

export default function BurgerModal() {
  return (
    <div className='fixed bottom-28 left-0 z-50 h-screen w-full bg-grey-400'>
      <div className='mx-auto flex flex-col items-center gap-12 pt-40 text-white'>
        <BurgerModalNavigation />
        <BurgerModalAddress />
        <BurgerModalSocialLinks />
      </div>
    </div>
  )
}
