import Icon from '@/components/ui/Icon'
import SquareButton from '@/components/ui/SquareButton'

export default function ButtonsBlock() {
  const handlerAddToCard = () => {
    console.log('Add to card')
  }
  const handlerAddToWishlist = () => {
    console.log('Add to Wishlist')
  }

  return (
    <div className='flex gap-1 py-3'>
      <SquareButton
        className='flex w-60 justify-center gap-2 rounded-sm bg-black py-4 text-white
          hover:bg-grey-400'
        onClick={handlerAddToCard}
        type='button'>
        <Icon
          className=''
          id='icon-cart'
          w={18}
          h={18}
        />
        <span className='font-manrope text-base font-semibold capitalize tracking-wide'>
          Add to Cart
        </span>
      </SquareButton>

      <SquareButton
        className='flex w-60 justify-center gap-2 rounded-sm border-2 border-solid
          border-brown-accent bg-white py-4 hover:bg-brown-accent'
        onClick={handlerAddToWishlist}
        type='button'>
        <Icon
          className='text-grey-400'
          id='icon-heart'
          w={18}
          h={18}
        />
        <span className='font-manrope text-base font-semibold capitalize tracking-wide text-grey-300'>
          Add to Wishlist
        </span>
      </SquareButton>
    </div>
  )
}

