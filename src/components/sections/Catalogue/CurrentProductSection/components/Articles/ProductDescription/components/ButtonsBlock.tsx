import useCart from '@/store/cart/cart'
import useWishlist from '@/store/wishlist/wishlist'
import { Product } from '@/types'

import Icon from '@/components/ui/Icon'
import SquareButton from '@/components/ui/SquareButton'

export default function ButtonsBlock({ product }: { product: Product }) {
  const {
    id,
    title,
    slug,
    discountPercent,
    price,
    category,
    media: {
      main: { url, status }
    }
  } = product

  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist()
  const { addToCart, cart } = useCart()

  const inCart: boolean = cart.some(item => item.id === id)
  const isLiked: boolean = wishlist.some(item => item.id === id)

  const handlerAddToCard = (e: React.MouseEvent) => {
    e.preventDefault()

    const newProduct: Product = {
      id,
      title,
      slug,
      category,
      price,
      discountPercent,
      media: {
        main: { url, status }
      }
    }

    console.log('Add to card', newProduct)

    addToCart(newProduct)
  }
  const handlerAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault()

    const newProduct: Product = {
      id,
      title,
      slug,
      category,
      price,
      discountPercent,
      media: {
        main: { url, status }
      }
    }

    if (isLiked) {
      console.log('removed from Wishlist')
      removeFromWishlist({ id: newProduct.id })
    } else {
      console.log('Added to Wishlist')
      addToWishlist(newProduct)
    }
  }

  return (
    <div className='flex flex-col gap-3 md:mb-6 md:flex-row'>
      <SquareButton
        className='flex w-full rounded-sm bg-black py-4 text-base text-white
          lg:hover:bg-black-hover'
        onClick={handlerAddToCard}
        type='button'>
        {inCart ? (
          <div
            className='flex items-center justify-center gap-2 font-manrope text-base font-semibold
              tracking-wide'>
            <Icon
              w={16}
              h={16}
              id='icon-check'
            />
            In Cart
          </div>
        ) : (
          <div
            className='flex items-center justify-center gap-2 font-manrope text-base font-semibold
              tracking-wide'>
            <Icon
              className=''
              id='icon-cart'
              w={18}
              h={18}
            />
            Add to Cart
          </div>
        )}
      </SquareButton>

      <SquareButton
        className='border-brown-accent lg:hover:bg-brown-accent flex w-full justify-center
          rounded-sm border-2 border-solid bg-white py-4 text-base'
        onClick={handlerAddToWishlist}
        type='button'>
        {isLiked ? (
          <div
            className='flex items-center justify-center gap-2 bg-transparent font-manrope font-semibold
              tracking-wide text-grey-300'>
            <Icon
              className='text-brown-accent'
              id='icon-heart-filled'
              w={18}
              h={18}
            />
            In Wishlist
          </div>
        ) : (
          <div
            className='flex items-center justify-center gap-2 font-manrope font-semibold tracking-wide
              text-grey-300'>
            <Icon
              className='text-grey-400'
              id='icon-heart'
              w={18}
              h={18}
            />
            Add to Wishlist
          </div>
        )}
      </SquareButton>
    </div>
  )
}
