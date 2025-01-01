interface ListItem {
  id: number
  text: string
}

interface IProps {
  title: string
  infoList: ListItem[]
}

function FooterInfoList({ title, infoList }: IProps) {
  return (
    <div className='h-[400px] bg-black p-[15px] text-white'>
      <h4
        className='mb-slide-large text-left font-manrope text-[12px] font-semibold
          leading-[16.39px] tracking-[0.01em] text-brown'>
        {title}
      </h4>
      <ul className='flex flex-col gap-3'>
        {infoList.map(({ id, text }) => (
          <li
            key={id}
            className='gap-3 text-left font-manrope text-[16px] font-normal leading-[21.86px]
              tracking-[0.01em]'>
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterInfoList
