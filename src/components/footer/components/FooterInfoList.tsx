import Link from 'next/link'

interface ListItem {
  id: number
  text: string
  link: string
}

interface IProps {
  title: string
  infoList: ListItem[]
}

export default function FooterInfoList({ title, infoList }: IProps) {
  return (
    <div className='flex flex-col items-center gap-8 smd:items-start'>
      <h4 className='text-xs font-semibold uppercase text-brown'>{title}</h4>
      <ul className='flex flex-col items-center gap-3 smd:items-start'>
        {infoList.map(({ id, text, link }) => (
          <li
            key={id}
            className='text-[18px] leading-[24px] transition-[underline] hover:underline
              hover:decoration-1 hover:underline-offset-2 smd:text-[16px] smd:leading-[21px]'>
            <Link href={`/customer-service/${link}`}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
