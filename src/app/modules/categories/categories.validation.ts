import { z } from 'zod'

const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Category Name is required')
      .max(50, 'Name cannot be more than 50 characters'),
  }),
})

export const CategoryValidation = {
  createCategoryValidationSchema,
}
