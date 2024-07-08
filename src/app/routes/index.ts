import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { CategoryRoutes } from '../modules/categories/categories.route'
import { ProductRoutes } from '../modules/products/products.route'

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
]

moduleRoutes.forEach((route) => router.use(route.path, route.routes))

export default router
