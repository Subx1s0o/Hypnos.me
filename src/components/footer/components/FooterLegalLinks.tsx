export default function FooterLegalLinks() {
  return (
    <div className='flex flex-col gap-[72px] smd:mb-[72px] smd:flex-row smd:gap-0 md:mb-0'>
      <ul
        className='flex flex-col items-center gap-3 text-[18px] leading-6 smd:w-3/5 smd:flex-row
          smd:items-start smd:text-xs lg:w-1/2 lg:gap-[54px]'>
        <li
          className='transition-[underline] hover:underline hover:decoration-1
            hover:underline-offset-2'>
          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'>
            Credentials
          </a>
        </li>
        <li
          className='transition-[underline] hover:underline hover:decoration-1
            hover:underline-offset-2'>
          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'>
            Customer Agreement
          </a>
        </li>
        <li
          className='transition-[underline] hover:underline hover:decoration-1
            hover:underline-offset-2'>
          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'>
            Data processing policy
          </a>
        </li>
      </ul>
      <div
        className='text-brown-light flex flex-col items-center gap-3 text-[18px] leading-6
          smd:w-2/5 smd:flex-row smd:items-start smd:text-xs lg:w-1/2 lg:gap-8'>
        <span>All rights reserved</span>
        <span>2024 © Hypnos</span>
      </div>
    </div>
  )
}
