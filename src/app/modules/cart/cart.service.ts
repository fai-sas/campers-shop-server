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

  const existingCart = await Cart.findOne({ cartProduct: payload.cartProduct })

  if (existingCart) {
    const newQuantity = existingCart.quantity + (payload.quantity || 1)
    if (newQuantity > isProductExists.stock) {
      throw new Error('Exceeds available stock')
    }
    existingCart.quantity = newQuantity
    await existingCart.save()
    return existingCart.populate('cartProduct')
  }

  const result = await Cart.create({
    cartProduct: payload.cartProduct,
    quantity: payload.quantity || 1,
  })
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

const updateCartIntoDb = async (id: string, payload: Partial<TCart>) => {
  if (typeof payload.quantity !== 'number' || isNaN(payload.quantity)) {
    throw new Error('Quantity must be a valid number')
  }

  const cartItem = await Cart.findById(id)
  if (!cartItem) {
    throw new Error('Cart item not found')
  }

  const product = await Product.findById(cartItem.cartProduct)
  if (!product) {
    throw new Error('Product not found')
  }

  if (payload.quantity > product.stock) {
    throw new Error('Exceeds available stock')
  }

  cartItem.quantity = payload.quantity
  await cartItem.save()
  return cartItem.populate('cartProduct')
}

const deleteCartFromDB = async (_id: string) => {
  const result = await Cart.deleteOne({ _id })
  return result
}

export const CartServices = {
  createCartIntoDb,
  getAllCartsFromDB,
  getSingleCartFromDb,
  updateCartIntoDb,
  deleteCartFromDB,
}
