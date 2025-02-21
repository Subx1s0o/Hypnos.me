export default function FooterLegalLinks() {
  return (
    <div className='flex flex-col gap-[72px]'>
      <ul className='flex flex-col items-center gap-3 text-[18px] leading-[24px]'>
        <li>
          <a href=''>Credentials</a>
        </li>
        <li>
          <a href=''>Customer Agreement</a>
        </li>
        <li>
          <a href=''>Data processing policy</a>
        </li>
      </ul>
      <div className='flex flex-col items-center gap-3 text-[18px] leading-[24px] text-[#C3AD9C]'>
        <span>All rights reserved</span>
        <span>2024 © Hypnos</span>
      </div>
    </div>
  )
}
