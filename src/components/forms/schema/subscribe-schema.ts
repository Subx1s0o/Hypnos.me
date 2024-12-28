import { z } from 'zod'

export const SubscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
  isChecked: z
    .boolean()
    .refine(val => val === true, 'You must agree with the policy')
})

export type SubscribeType = z.infer<typeof SubscribeSchema>
