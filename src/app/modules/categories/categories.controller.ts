import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'
import { CategoryServices } from './categories.service'

const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.createCategoryIntoDb(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category created successfully',
    data: result,
  })
})

export const CategoryControllers = {
  createCategory,
}
