import { z } from 'zod'

export const UserDataSchema = z.object({
  firstName: z.string().min(1, "This field can't be empty"),
  secondName: z.string().min(1, "This field can't be empty"),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, "This field can't be empty"),
  birthday: z.string().min(1, "This field can't be empty")
})

export type UserDataType = z.infer<typeof UserDataSchema>

export default UserDataSchema
