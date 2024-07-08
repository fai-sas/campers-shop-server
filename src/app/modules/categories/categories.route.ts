import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { CategoryValidation } from './categories.validation'
import { CategoryControllers } from './categories.controller'

const router = express.Router()

router.post(
  '/create-category',
  validateRequest(CategoryValidation.createCategoryValidationSchema),
  CategoryControllers.createCategory
)

export const CategoryRoutes = router
