import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'
import { CartServices } from './cart.service'

const createCart = catchAsync(async (req, res) => {
  const result = await CartServices.createCartIntoDb(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Product added to cart successfully',
    data: result,
  })
})

const getAllCarts = catchAsync(async (req, res) => {
  const result = await CartServices.getAllCartsFromDB(req.query)
  console.log(req.query)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart Items retrieved successfully',
    meta: result.meta,
    data: result.result,
  })
})

const getSingleCart = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await CartServices.getSingleCartFromDb(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart Items retrieved successfully',
    data: result,
  })
})

const updateCart = catchAsync(async (req, res) => {
  const { id } = req.params
  const { quantity } = req.body

  if (!quantity || typeof quantity !== 'number' || isNaN(quantity)) {
    return res.status(400).json({
      success: false,
      message: 'Quantity must be a valid number',
    })
  }

  const result = await CartServices.updateCartIntoDb(id, { quantity })

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  })
})

const deleteCart = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await CartServices.deleteCartFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart Item Deleted successfully',
    data: result,
  })
})

export const CartControllers = {
  createCart,
  getAllCarts,
  getSingleCart,
  updateCart,
  deleteCart,
}
