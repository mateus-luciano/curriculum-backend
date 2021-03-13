import { Router } from 'express'
import CommentInfoController from '../controllers/CommentInfoController'
import { validateData, validateUuid } from '../middlewares/commentMiddleware'

const routes = new Router()

routes.get('/commentsinfo', CommentInfoController.index)
routes.get('/commentsinfo/:uuid', validateUuid, CommentInfoController.show)
routes.post('/commentsinfo', validateData, CommentInfoController.store)
routes.put('/commentsinfo/:uuid', validateUuid, validateData, CommentInfoController.update)
routes.delete('/commentsinfo/:uuid', validateUuid, CommentInfoController.delete)

export default routes