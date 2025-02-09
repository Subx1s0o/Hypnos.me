import { z } from 'zod'

const EmailSchema = z
  .string()
  .email(
    "Invalid email format. The email must include a valid domain, an '@' symbol, and a subdomain."
  )
  .min(1, "This field can't be empty")

export const SignInSchema = z.object({
  email: EmailSchema,
  password: z.string().min(1, "This field can't be empty")
})

export const SignUpSchema = SignInSchema.extend({
  firstName: z.string().min(1, "This field can't be empty"),
  secondName: z.string().min(1, "This field can't be empty"),
  subscribed: z.boolean().optional()
})

export const ForgotPasswordSchema = z.object({
  email: EmailSchema
})

export type ForgotPasswordType = z.infer<typeof ForgotPasswordSchema>
export type SignInType = z.infer<typeof SignInSchema>
export type SignUpType = z.infer<typeof SignUpSchema>
