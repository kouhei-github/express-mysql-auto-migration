import {User} from '../models/User'

type CustomPick<P, K extends keyof P> = {
  [O in K]: P[O]
}
export const createUser = async (data: CustomPick<User, "email"|"password"|"salt">): Promise<User> => {
  return await User.create(data)
}

export const findUserByEmail = async (email: string): Promise<User | null> => await User.findOne({ where: { email: email }, attributes: { exclude: ['password', 'salt', 'sessionToken'] }})

export const findAllUser = async (): Promise<User[]> => {
  return User.findAll()
}