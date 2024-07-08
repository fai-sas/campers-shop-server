import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'
import { ProductServices } from './products.service'

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDb(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Product created successfully',
    data: result,
  })
})

export const ProductControllers = {
  createProduct,
}
