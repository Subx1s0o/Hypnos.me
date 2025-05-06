import React from 'react'

import BurgerModalAddress from './BurgerModalAddress'
import BurgerModalNavigation from './BurgerModalNavigation'
import BurgerModalSocialLinks from './BurgerModalSocialLinks'

export default function BurgerModal() {
  return (
    <>
      <BurgerModalNavigation />
      <BurgerModalAddress />
      <BurgerModalSocialLinks />
    </>
  )
}
