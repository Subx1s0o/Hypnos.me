import Icon from '@/components/ui/Icon'

export default function BonusesPage() {
  const bonuses = 1200

  return (
    <section>
      <div className='mb-8 flex flex-col gap-2 font-manrope md:flex-row md:items-center md:gap-4'>
        <span className='flex size-8 items-center justify-center rounded-full bg-grey-light'>
          <Icon
            id='icon-wallet-filled'
            w={16}
            h={16}
            className='text-black'
          />
        </span>
        <h2 className='mb-6 text-base-big xxl:font-semibold xxl:leading-[32px]'>
          Bonuses
        </h2>
        <table className='mb-6 w-full'>
          <thead>
            <tr className='p-0 text-left'>
              <th className='text-sm text-grey-normal'>Your bonuses</th>
              <th className=''></th>
              <th className='text-sm text-grey-normal'>1 bonus = 1 $</th>
            </tr>
          </thead>
          <tbody>
            <tr className='p-0 text-left text-smd xxs:text-[48px]'>
              <td className='p-0'>{bonuses}</td>
              <td className='p-0 px-2'>=</td>
              <td className='p-0'>{bonuses} $</td>
            </tr>
          </tbody>
        </table>
        <div className='rounded-[3px] bg-grey-light p-[18px]'>
          <p className='mb-[26px] text-base-big font-semibold'>20%</p>
          <p className='text-sm'>Of order can be payed by bonuses</p>
        </div>
        <div className='rounded-[3px] bg-grey-light p-[18px]'>
          <p className='mb-[26px] text-base-big font-semibold'>5%</p>
          <p className='text-sm'>You can receive from each order for Bonuses</p>
        </div>
      </div>
    </section>
  )
}
