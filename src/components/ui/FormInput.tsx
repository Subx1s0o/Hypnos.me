/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from 'react'
import { cn } from '@/lib/cn'
import { Control, useController } from 'react-hook-form'

import Icon from './Icon'

type FormInputProps = ComponentProps<'input'> & {
  control: Control<any>
  label?: string
  name: string
  placeholder?: string
  isPasswordField?: boolean
  isPasswordShown?: boolean
  toggleShowPassword?: () => void
}
export default function FormInput({
  control,
  name,
  label,
  className,
  placeholder,
  isPasswordField = false,
  isPasswordShown,
  toggleShowPassword,
  ...inputProps
}: FormInputProps) {
  const {
    formState: { errors }
  } = useController({ control, name })

  return (
    <div className='flex flex-col'>
      {label && (
        <label className='mb-4 text-xs font-bold uppercase'>{label}</label>
      )}
      <div className='relative'>
        <input
          autoComplete='on'
          {...control.register(name)}
          {...inputProps}
          className={cn(
            `h-[48px] w-full rounded-[4px] border border-grey-200 bg-white px-[14px] py-4
            text-sm outline-none transition-colors focus-visible:border-black ${className}`,
            {
              'border-error': errors?.[name]
            }
          )}
        />
        {isPasswordField && toggleShowPassword && (
          <button
            type='button'
            onClick={toggleShowPassword}
            className='absolute right-[12px] top-[14px]'>
            <Icon
              id={isPasswordShown ? 'icon-eye' : 'icon-eye-off'}
              w={20}
              h={20}
              className='text-[#4E453E]'
            />
          </button>
        )}
      </div>
      {errors[name] && (
        <p className='mt-1 text-sm text-error'>
          {errors[name].message?.toString()}
        </p>
      )}
    </div>
  )
}
