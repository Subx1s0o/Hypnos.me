import { z } from 'zod'

export const UserDataSchema = z.object({
  firstName: z.string().min(1, "This field can't be empty"),
  secondName: z.string().min(1, "This field can't be empty"),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, "This field can't be empty"),
  birthday: z.string().min(1, "This field can't be empty")
})

export const NewPasswordSchema = z
  .object({
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
      }),
    repeatNewPassword: z.string()
  })
  .refine(data => data.newPassword === data.repeatNewPassword, {
    message: "Passwords don't match",
    path: ['repeatNewPassword'] // Path to the field that should show the error
  })

export type UserDataType = z.infer<typeof UserDataSchema>
export type NewPasswordType = z.infer<typeof NewPasswordSchema>
