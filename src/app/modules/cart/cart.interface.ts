import { Types } from 'mongoose'

interface TCart {
  cartProduct: Types.ObjectId
  quantity?: number
}

export default TCart
