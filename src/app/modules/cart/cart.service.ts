import httpStatus from 'http-status'
import { Product } from '../products/products.model'
import TCart from './cart.interface'
import { Cart } from './cart.model'
import AppError from '../../errors/AppError'
import QueryBuilder from '../../builder/QueryBuilder'

const createCartIntoDb = async (payload: TCart) => {
  const isProductExists = await Product.findById(payload?.cartProduct)

  if (!isProductExists) {
    throw new Error('Product does not exists')
  }

  const result = await Cart.create(payload)

  return result.populate('cartProduct')
}

const getAllCartsFromDB = async (query: Record<string, unknown>) => {
  const cartQuery = new QueryBuilder(Cart.find().populate('cartProduct'), query)
    .filter()
    .sort()
    .paginate()
    .fields()

  const meta = await cartQuery.countTotal()
  const result = await cartQuery.modelQuery

  return {
    meta,
    result,
  }
}

const getSingleCartFromDb = async (id: string) => {
  const result = await Cart.findById(id)

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Requested Cart Item Not Found')
  }

  return result.populate('cartProduct')
}

const deleteCartFromDB = async (_id: string) => {
  const result = await Cart.deleteOne({ _id })
  return result
}

export const CartServices = {
  createCartIntoDb,
  getAllCartsFromDB,
  getSingleCartFromDb,
  deleteCartFromDB,
}
