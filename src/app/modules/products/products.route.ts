import express, { NextFunction, Request, Response } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { ProductValidation } from './products.validation'
import { ProductControllers } from './products.controller'
import { upload } from '../../utils/sendImageToCloudinary'

const router = express.Router()

// router.post(
//   '/create-product',
//   validateRequest(ProductValidation.createProductValidationSchema),
//   ProductControllers.createProduct
// )

router.post(
  '/create-product',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    next()
  },
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductControllers.createProduct
)

router.get('/', ProductControllers.getAllProducts)

router.get('/:id', ProductControllers.getSingleProduct)

router.put('/:id', ProductControllers.updateProduct)

router.delete('/:id', ProductControllers.deleteProduct)

export const ProductRoutes = router
