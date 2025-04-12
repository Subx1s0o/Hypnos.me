import { User } from '@/types/user'

import Icon from '@/components/ui/Icon'

export default function ProfileBonuseHistory({
  userData
}: {
  userData: User | undefined
}) {
  console.log(userData)

  //use userData?.bonusesHistory after it is done on Back-end

  const bonusesHistory = [
    {
      amount: 1234,
      description: '5% from purchasing Super cool ring',
      receivedDate: '12.01.2025'
    },
    {
      amount: 1000,
      description: '5% from purchasing Super cool ring',
      receivedDate: '12.01.2025'
    },
    {
      amount: 500,
      description: '5% from purchasing Super cool ring',
      receivedDate: '12.01.2025'
    }
  ]

  return (
    <div className='flex flex-col gap-2 font-manrope md:flex-row md:items-center md:gap-4'>
      <span className='flex size-8 items-center justify-center rounded-full bg-grey-light'>
        <Icon
          id='icon-wallet-filled'
          w={16}
          h={16}
          className='text-black'
        />
      </span>
      <h2 className='mb-6 text-base-big xxl:font-semibold xxl:leading-[32px]'>
        Order Bonus History
      </h2>
      {bonusesHistory && bonusesHistory.length > 0 ? (
        <ul className='flex flex-col gap-8 text-base md:gap-[14px]'>
          {bonusesHistory.map((item, index) => (
            <li
              key={index}
              className='flex flex-col gap-2 md:flex-row md:items-stretch md:gap-0'>
              <p>+{item.amount}</p>
              <p>{item.description}</p>
              <p>{item.receivedDate}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className='mb-[64px] text-base'>No bonuses yet</div>
      )}
    </div>
  )
}
