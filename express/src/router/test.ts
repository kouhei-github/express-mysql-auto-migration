import {Request, Response, Router} from 'express'


const testHandler = async (req: Request, res: Response) => {
  // const category = await findAllEvent()

  return res.status(200).json({data: "test"}).end()
}

export default (router: Router) => {
  router.get("/v1/test", testHandler)
}

