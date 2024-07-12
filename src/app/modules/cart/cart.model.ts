import { model, Schema } from 'mongoose'
import TCart from './cart.interface'

const cartSchema = new Schema<TCart>(
  {
    cartProduct: {
      type: Schema.Types.ObjectId,
      required: [true, 'Product is required'],
      ref: 'Product',
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
)

export const Cart = model<TCart>('Cart', cartSchema)
