import { model, Schema } from 'mongoose'
import TProduct from './products.interface'

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
    },
    stock: {
      type: Number,
      required: [true, 'Product stock is required'],
    },
    // quantity: {
    //   type: Number,
    //   required: [true, 'Product quantity is required'],
    // },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
    },
    ratings: {
      type: Number,
      required: [true, 'Product ratings are required'],
    },
    image: {
      type: String,
      required: [true, 'Product images are required'],
    },
  },
  {
    timestamps: true,
  }
)

export const Product = model<TProduct>('Product', productSchema)
