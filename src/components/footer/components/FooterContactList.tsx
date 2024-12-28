function FooterContactList() {
  return (
    <div className='ml-[-15px] h-[400px] bg-black text-white'>
      <h4
        className='mb-slide-large gap-8 text-left font-manrope text-[12px] font-semibold
          leading-[16.39px] tracking-[0.01em] text-brown'>
        Schedule
      </h4>
      <div className='flex gap-16'>
        <p>Mon—Fri</p>
        <p>10:00 — 19:00</p>
      </div>
      <div className='flex gap-16'>
        <p>Sat—Sun</p>
        <p>By appointment only</p>
      </div>
    </div>
  )
}

export default FooterContactList
