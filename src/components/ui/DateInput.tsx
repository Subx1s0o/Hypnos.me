'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import coerceDate from '@/lib/coerceDate'
import { useController } from 'react-hook-form'

interface DateInputProps {
  label: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any
  dateFormat?: string
  className?: string
  defaultValue: string | Date | null | undefined
}

export default function DateInput({
  defaultValue,
  label,
  name,
  control,
  dateFormat = 'yyyy-MM-dd',
  className
}: DateInputProps) {
  const {
    formState: { errors }
  } = useController({ control, name })

  const { field } = useController({ name, control })
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    coerceDate(defaultValue)
  )

  useEffect(() => {
    setSelectedDate(coerceDate(defaultValue))
  }, [defaultValue])

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
    if (date && date instanceof Date) {
      // Format as YYYY-MM-DD string to avoid timezone issues
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const formattedDate = `${year}-${month}-${day}T00:00:00+00:00`

      field.onChange(formattedDate)
    } else {
      field.onChange('')
    }
  }

  return (
    <div className='flex flex-col'>
      {label && (
        <label className='mb-4 text-xs font-bold uppercase'>{label}</label>
      )}
      <div className='relative w-full *:w-full xxl:*:w-1/2'>
        <DatePicker
          id={name}
          selected={selectedDate}
          showYearDropdown
          yearDropdownItemNumber={100}
          scrollableYearDropdown
          onChange={handleDateChange}
          dateFormat={dateFormat}
          className={cn(
            `h-[48px] w-full rounded-[4px] border border-grey-200 bg-white px-[14px] py-4
            text-sm outline-none transition-colors focus-visible:border-black ${className}`,
            {
              'border-error': errors?.[name]
            }
          )}
        />
      </div>
      {errors[name] && (
        <p className='mt-1 text-sm text-error'>
          {errors[name].message?.toString()}
        </p>
      )}
    </div>
  )
}
