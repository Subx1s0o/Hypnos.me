export default function FooterContactList() {
  return (
    <div className='mb-[72px] w-[308px]'>
      <h4 className='mb-6 text-xs font-semibold uppercase text-brown lg:mb-slide-large'>
        Schedule
      </h4>
      <ul className='flex flex-col gap-2 text-sm font-normal leading-[19px]'>
        <li className='flex gap-4'>
          <p>Mon—Fri</p>
          <p>10:00 — 19:00</p>
        </li>
        <li className='flex gap-4'>
          <p>Sat—Sun</p>
          <p>By appointment only</p>
        </li>
      </ul>
    </div>
  )
}
