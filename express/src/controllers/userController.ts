import {Request, Response} from 'express'
import {createUser, findAllUser, findUserByEmail} from '../repositories/User'
import {authentication, random} from '../service/secret/authenticate'

export const saveUserHandler = async (req: Request, res: Response) => {
  const {email, password} = req.body as {email: string, password: string}

  const exist = await findUserByEmail(email)

  if (exist !== null){
    return res.status(409).json({ message: "User already exists" });
  }

  const salt = random()

  const user = await createUser({
    email,
    salt,
    password: authentication(salt, password),
  })
  res.json(user);
};

export const usersHandler = async (req: Request, res: Response) => {
  const user = await findAllUser()
  res.json(user);
};