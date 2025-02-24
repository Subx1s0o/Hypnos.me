export default function FooterContactList() {
  return (
    <address
      className='flex max-w-[190px] flex-col items-center gap-3 text-[18px] leading-[24px]
        md:max-w-full md:flex-row md:gap-0 md:text-xs'>
      <div className='ld:gap-[58px] flex flex-col items-center gap-3 md:w-3/4 md:flex-row'>
        <a href='tel:+12155550199'>+1 215-555-0199</a>
        <a href='mailto:cs@hypnos.store'>cs@hypnos.store</a>
      </div>
      <span className='text-center md:w-1/4 md:text-left'>
        Tarasa Shevchenka 25, Kyiv
      </span>
    </address>
  )
}
