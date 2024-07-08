import TProduct from './products.interface'
import { Product } from './products.model'

const createProductIntoDb = async (payload: TProduct) => {
  const existingProduct = await Product.findOne({ name: payload.name })

  if (existingProduct) {
    throw new Error('Product already exists')
  }

  const result = await Product.create(payload)

  return result
}

export const ProductServices = {
  createProductIntoDb,
}
