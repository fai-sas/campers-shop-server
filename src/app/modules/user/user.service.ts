import httpStatus from 'http-status'
import { TUser } from './user.interface'
import { User } from './user.model'
import AppError from '../../errors/AppError'

const signUpUserIntoDb = async (payload: TUser) => {
  const existingUser = await User.findOne({ email: payload.email })

  if (existingUser) {
    throw new Error('User with this email already exists')
  }

  const result = await User.create(payload)

  const userObj = result?.toObject()
  delete userObj?.password

  return userObj
}

const signInUserIntoDb = async (payload: Partial<TUser>) => {}

export const UserServices = {
  signUpUserIntoDb,
  signInUserIntoDb,
}
