import { z } from 'zod'

const createProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Category Name is required')
      .max(50, 'Name cannot be more than 50 characters'),
    description: z
      .string()
      .min(1, 'A brief description of the product is required'),
    price: z.number({
      required_error: 'The price of the product is required',
    }),
    stock: z.number({
      required_error: 'The stock of the product is required',
    }),
    quantity: z.number({
      required_error: 'The quantity of the product is required',
    }),
    category: z
      .string()
      .min(1, 'Category Name is required')
      .max(50, 'Name cannot be more than 50 characters'),
    ratings: z.number({
      required_error: 'The ratings of the product is required',
    }),
    // images: z.array(z.string()).min(1, 'At least one image is required'),
  }),
})

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Category Name is required')
      .max(50, 'Name cannot be more than 50 characters')
      .optional(),
    description: z
      .string()
      .min(1, 'A brief description of the product is required')
      .optional(),
    price: z
      .number({
        required_error: 'The price of the product is required',
      })
      .optional(),
    stock: z
      .number({
        required_error: 'The stock of the product is required',
      })
      .optional(),
    quantity: z
      .number({
        required_error: 'The quantity of the product is required',
      })
      .optional(),
    category: z
      .string()
      .min(1, 'Category Name is required')
      .max(50, 'Name cannot be more than 50 characters')
      .optional(),
    ratings: z
      .number({
        required_error: 'The ratings of the product is required',
      })
      .optional(),
    images: z
      .array(z.string())
      .min(1, 'At least one image is required')
      .optional(),
  }),
})

export const ProductValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
}
