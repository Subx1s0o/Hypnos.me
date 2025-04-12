'use client'

import { useState } from 'react'
import { User } from '@/types/user'

import Icon from '@/components/ui/Icon'

export default function ProfileReferral({
  userData
}: {
  userData: User | undefined
}) {
  const [copied, setCopied] = useState(false)
  const linkText = `hypnos.store/${userData?.referredCode || ''}`

  const handleCopy = () => {
    navigator.clipboard
      .writeText(linkText)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }

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
        Referral Link
      </h2>
      <div
        className='text-grey-250 w-full rounded-[3px] bg-grey-light p-[21px] text-base
          font-semibold leading-[100%]'>
        <p>{linkText}</p>
      </div>
      <button
        type='button'
        onClick={handleCopy}
        className='mb-6 flex items-center gap-1 text-left text-xs font-extrabold uppercase'>
        {copied ? (
          <>
            <Icon
              id='icon-check'
              w={16}
              h={16}
              className='text-green-500'
            />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <span>Copy</span>
          </>
        )}
      </button>
      <p className='text-grey-250 text-sm'>
        Send a referral link to your friend. This will earn you and him 30
        points for registering on the site, which can be used within 30 days.
      </p>
    </div>
  )
}
