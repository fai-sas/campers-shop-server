import { model, Schema } from 'mongoose'
import TCategory from './categories.interface'

const categorySchema = new Schema<TCategory>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
  },
  {
    timestamps: true,
  }
)

export const Category = model<TCategory>('Category', categorySchema)
