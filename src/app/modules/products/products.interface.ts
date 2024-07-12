// import { Schema } from 'mongoose'

interface TProduct {
  name: string
  price: number
  stock: number
  // quantity: number
  description: string
  category: string
  ratings: number
  image?: string
}

export default TProduct
