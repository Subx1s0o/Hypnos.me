/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from 'react'
import { cn } from '@/lib/cn'
import { Control, useController } from 'react-hook-form'

type FormInputProps = ComponentProps<'input'> & {
  control: Control<any>
  label?: string
  name: string
}
export default function FormInput({
  control,
  name,
  label,
  className,
  ...inputProps
}: FormInputProps) {
  const {
    formState: { errors }
  } = useController({ control, name })

  return (
    <div className='flex flex-col'>
      {label && <label className='mb-4 text-xs'>{label}</label>}
      <input
        {...control.register(name)}
        {...inputProps}
        className={cn(
          `h-[48px] w-full rounded-xl border border-grey-200 bg-white px-[14px] py-4
          text-sm outline-none transition-colors focus-visible:border-black ${className}`,
          {
            'border-error': errors?.[name]
          }
        )}
      />
      {errors[name] && (
        <p className='text-error text-sm'>{errors[name].message?.toString()}</p>
      )}
    </div>
  )
}
