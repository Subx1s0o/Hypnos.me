import { z } from 'zod'

export const SignInSchema = z.object({
  email: z.string().email().min(1, "This field can't be empty"),
  password: z.string().min(1, "This field can't be empty")
})

export const SignUpSchema = SignInSchema.extend({
  name: z.string().min(1, "This field can't be empty")
})

export type SignInType = z.infer<typeof SignInSchema>
export type SignUpType = z.infer<typeof SignUpSchema>
