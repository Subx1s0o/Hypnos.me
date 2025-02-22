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
    <div className='flex flex-col items-center gap-8 md:items-start'>
      <h4 className='text-xs font-semibold uppercase text-brown'>{title}</h4>
      <ul className='flex flex-col items-center gap-3 md:items-start'>
        {infoList.map(({ id, text }) => (
          <li
            key={id}
            className='text-[18px] leading-[24px] md:text-[16px] md:leading-[21px]'>
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}
