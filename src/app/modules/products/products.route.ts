import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { ProductValidation } from './products.validation'
import { ProductControllers } from './products.controller'

const router = express.Router()

router.post(
  '/create-product',
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductControllers.createProduct
)

router.get('/', ProductControllers.getAllProducts)

router.get('/:id', ProductControllers.getSingleProduct)

export const ProductRoutes = router
