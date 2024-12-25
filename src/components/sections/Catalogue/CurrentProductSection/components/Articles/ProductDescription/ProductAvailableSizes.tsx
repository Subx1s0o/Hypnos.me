interface ProductAvailableSizesProps {
  sizes: number[]
}

export default function ProductAvailableSizes({
  sizes
}: ProductAvailableSizesProps) {
  return (
    <div className='flex items-center justify-between'>
      <h3 className='mb-4 text-base-big font-normal'>Available Sizes: </h3>
      <ul className='mb-4 flex gap-4'>
        {sizes.map((size, index) => (
          <li
            className='rounded-lg bg-brown px-4 py-2 text-white'
            key={index}>
            {size}
          </li>
        ))}
      </ul>
    </div>
  )
}
