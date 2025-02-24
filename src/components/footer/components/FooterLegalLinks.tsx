export default function FooterLegalLinks() {
  return (
    <div className='flex flex-col gap-[72px] md:flex-row md:gap-0'>
      <ul
        className='flex flex-col items-center gap-3 text-[18px] leading-[24px] md:w-[50%]
          md:flex-row md:items-start md:text-xs lg:gap-[54px]'>
        <li>
          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'>
            Credentials
          </a>
        </li>
        <li>
          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'>
            Customer Agreement
          </a>
        </li>
        <li>
          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'>
            Data processing policy
          </a>
        </li>
      </ul>
      <div
        className='flex flex-col items-center gap-3 text-[18px] leading-[24px] text-[#C3AD9C]
          md:w-[50%] md:flex-row md:items-start md:text-xs lg:gap-8'>
        <span>All rights reserved</span>
        <span>2024 © Hypnos</span>
      </div>
    </div>
  )
}
