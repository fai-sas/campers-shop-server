import httpStatus from 'http-status'
import QueryBuilder from '../../builder/QueryBuilder'
import { ProductSearchableFields } from './products.constants'
import TProduct from './products.interface'
import { Product } from './products.model'
import AppError from '../../errors/AppError'

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

const getSingleProductFromDb = async (id: string) => {
  const result = await Product.findById(id)

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Requested Car Not Found')
  }

  return result
}

const updateProductIntoDb = async (id: string, payload: Partial<TProduct>) => {
  const isProductExists = await Product.findById(id)

  if (!isProductExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Requested Car Not Found')
  }

  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })

  return result
}

export const ProductServices = {
  createProductIntoDb,
  getAllProductsFromDB,
  getSingleProductFromDb,
  updateProductIntoDb,
}
