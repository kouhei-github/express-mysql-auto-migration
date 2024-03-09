import 'reflect-metadata'
import express from "express"
import cors from "cors"
import * as http from 'http'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import router from './router'
import mySequelize from './db'
// データベースに接続

const app = express()
app.use(cors({
  credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
app.use("/api/", router())


const server = http.createServer(app)

mySequelize.sync().then(() => {
  server.listen(8000, () => {
    console.log("Server running")
  })
})


