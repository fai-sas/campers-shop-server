import TCategory from './categories.interface'
import { Category } from './categories.model'

const createCategoryIntoDb = async (payload: TCategory) => {
  const existingCategory = await Category.findOne({ name: payload.name })

  if (existingCategory) {
    throw new Error('Category already exists')
  }

  const result = await Category.create(payload)

  return result
}

export const CategoryServices = {
  createCategoryIntoDb,
}
