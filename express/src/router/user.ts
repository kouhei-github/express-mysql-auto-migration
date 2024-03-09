import { Router } from 'express'
import {saveUserHandler, usersHandler} from '../controllers/userController'

export default (router: Router) => {
  router.get("/v1/users", usersHandler)
  router.post("/v1/users", saveUserHandler)
}
