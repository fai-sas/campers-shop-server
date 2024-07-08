import QueryBuilder from '../../builder/QueryBuilder'
import { ProductSearchableFields } from './products.constants'
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

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(ProductSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()

  const meta = await productQuery.countTotal()
  const result = await productQuery.modelQuery

  return {
    meta,
    result,
  }
}

export const ProductServices = {
  createProductIntoDb,
  getAllProductsFromDB,
}
