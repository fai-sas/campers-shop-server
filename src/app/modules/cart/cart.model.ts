import { model, Schema } from 'mongoose'
import TCart from './cart.interface'

const cartSchema = new Schema<TCart>(
  {
    cartProduct: {
      type: Schema.Types.ObjectId,
      required: [true, 'Product is required'],
      ref: 'Product',
    },
  },
  {
    timestamps: true,
  }
)

export const Cart = model<TCart>('Cart', cartSchema)
