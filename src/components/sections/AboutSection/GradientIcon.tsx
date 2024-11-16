export default function GradientIcon() {
  return (
    <>
      <div className='-lg:bottom-2 flex justify-center rounded-full text-white sm:absolute'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='56'
          height='56'
          viewBox='0 0 56 56'
          fill='none'>
          <rect
            className='hover:fill-brown'
            width='56'
            height='56'
            rx='28'
            fill='url(#paint0_linear_1636_17873)'
          />
          <path
            d='M22.3431 22.3431L22.3431 24.3372L30.2415 24.3443L21.636 32.9497L23.0502 34.364L31.6557 25.7585L31.6628 33.6569L33.6568 33.6569L33.6568 22.3431L22.3431 22.3431Z'
            fill='white'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1636_17873'
              x1='28'
              y1='0'
              x2='28'
              y2='111.125'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#B99376' />
              <stop
                offset='1'
                stopColor='#B99376'
                stopOpacity='0'
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  )
}
