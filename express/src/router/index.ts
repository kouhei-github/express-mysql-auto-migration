import { Router } from 'express'
import user from './user'
import test from './test'

const router = Router()

export default (): Router => {
  user(router)
  test(router)
  return router
}
