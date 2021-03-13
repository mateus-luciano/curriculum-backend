import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routers from './app/routers'
import middlewares from './app/middlewares'
import './database'

class App {
  constructor() {
    this.server = express()
    this.config()
    this.middlewares()
    this.routes()
  }

  config() {
    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: false }))
    this.server.use(cors())

    dotenv.config({
      path: './../.env'
    })
  }

  middlewares() {
    this.server.use(middlewares)
  }

  routes() {
    this.server.use(routers)
  }
}

export default new App().server
