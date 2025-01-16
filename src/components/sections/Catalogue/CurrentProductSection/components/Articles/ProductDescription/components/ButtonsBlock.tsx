import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'

export default function ButtonsBlock() {
  const handlerAddToCard = () => {
    console.log('Add to card')
  }
  const handlerAddToWishlist = () => {
    console.log('Add to Wishlist')
  }

  return (
    <div className='flex gap-1 py-3'>
      <Button
        className='flex w-1/2 justify-center gap-2 rounded-sm bg-black py-4 text-white'
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
      </Button>

      <Button
        className='flex w-1/2 justify-center gap-2 rounded-sm border-2 border-solid border-brown
          bg-white py-4'
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
      </Button>
    </div>
  )
}
// border: 2px solid #E7BF8E
