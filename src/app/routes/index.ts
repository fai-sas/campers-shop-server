import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { CategoryRoutes } from '../modules/categories/categories.route'
import { ProductRoutes } from '../modules/products/products.route'
import { CartRoutes } from '../modules/cart/cart.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    routes: UserRoutes,
  },
  {
    path: '/categories',
    routes: CategoryRoutes,
  },
  {
    path: '/products',
    routes: ProductRoutes,
  },
  {
    path: '/cart',
    routes: CartRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.routes))

export default router
