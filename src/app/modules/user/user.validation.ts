import { z } from 'zod'

const signUpUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(50, 'Name cannot be more than 50 characters'),
    email: z.string().email('Invalid email address'),
    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .max(20, { message: 'Password can not be more than 20 characters' }),
    role: z
      .enum(['user', 'admin'], {
        errorMap: () => ({ message: 'Role must be either user or admin' }),
      })
      .default('user'),
    address: z.string(),
  }),
})

const signInUserValidationSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string({ required_error: 'Password is required' }),
  }),
})

export const UserValidation = {
  signUpUserValidationSchema,
  signInUserValidationSchema,
}
