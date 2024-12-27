import { z } from 'zod'

export const SignInSchema = z.object({
  email: z
    .string()
    .email(
      "Invalid email format. The email must include a valid domain, an '@' symbol, and a subdomain."
    )
    .min(1, "This field can't be empty"),
  password: z.string().min(1, "This field can't be empty")
})

export const SignUpSchema = SignInSchema.extend({
  name: z.string().min(1, "This field can't be empty")
})

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .email(
      "Invalid email format. The email must include a valid domain, an '@' symbol, and a subdomain."
    )
    .min(1, "This field can't be empty")
})

export type ForgotPasswordType = z.infer<typeof ForgotPasswordSchema>
export type SignInType = z.infer<typeof SignInSchema>
export type SignUpType = z.infer<typeof SignUpSchema>
