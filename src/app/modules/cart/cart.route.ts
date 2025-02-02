import express from 'express'
import { CartControllers } from './cart.controller'

const router = express.Router()

router.post('/create-cart', CartControllers.createCart)

router.get('/', CartControllers.getAllCarts)

router.get('/:id', CartControllers.getSingleCart)

router.put('/:id', CartControllers.updateCart)

router.delete('/:id', CartControllers.deleteCart)

export const CartRoutes = router
