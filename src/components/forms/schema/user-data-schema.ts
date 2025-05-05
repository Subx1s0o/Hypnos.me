import { z } from 'zod'

export const UserDataSchema = z.object({
  firstName: z.string().min(1, "This field can't be empty"),
  secondName: z.string().min(1, "This field can't be empty"),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, "This field can't be empty"),
  birthday: z
    .string()
    .min(1, "This field can't be empty")
    .refine(
      date => {
        const selectedDate = new Date(date)
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        return selectedDate < today
      },
      {
        message: 'Birthday must be in the past'
      }
    )
    .refine(
      date => {
        const selectedDate = new Date(date)
        const today = new Date()

        const ageInMs = today.getTime() - selectedDate.getTime()
        const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25)

        return ageInYears < 100
      },
      {
        message: 'Age must be less than 100 years'
      }
    )
})

export const NewPasswordSchema = z.object({
  oldPassword: z.string(),
  newPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .refine(val => /[A-Z]/.test(val), {
      message: 'Password must contain at least one uppercase letter'
    })
    .refine(val => /[a-z]/.test(val), {
      message: 'Password must contain at least one lowercase letter'
    })
    .refine(val => /[0-9]/.test(val), {
      message: 'Password must contain at least one number'
    })
})

export type UserDataType = z.infer<typeof UserDataSchema>
export type NewPasswordType = z.infer<typeof NewPasswordSchema>
