interface ProductAvailableSizesProps {
  sizes: number[]
}

export default function ProductAvailableSizes({
  sizes
}: ProductAvailableSizesProps) {
  return (
    <div className='flex flex-col justify-between md:flex-row md:items-center'>
      <h3 className='mb-4 text-base font-normal md:text-base-big'>
        Available Sizes:
      </h3>
      <ul className='mb-4 flex gap-2 md:gap-4'>
        {sizes.map((size, index) => (
          <li
            className='rounded-lg bg-brown px-3 py-1 text-white md:px-4 md:py-2'
            key={index}>
            {size}
          </li>
        ))}
      </ul>
    </div>
  )
}
