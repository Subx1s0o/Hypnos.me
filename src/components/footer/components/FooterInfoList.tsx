interface ListItem {
  id: number
  text: string
}

interface IProps {
  title: string
  infoList: ListItem[]
}

export default function FooterInfoList({ title, infoList }: IProps) {
  return (
    <div className='flex flex-col items-center gap-8'>
      <h4 className='font-manrope text-xs font-semibold uppercase text-brown'>
        {title}
      </h4>
      <ul className='flex flex-col items-center gap-3'>
        {infoList.map(({ id, text }) => (
          <li
            key={id}
            className='font-manrope text-[18px] leading-[24px]'>
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}
