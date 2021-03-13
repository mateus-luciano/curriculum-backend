import { Router } from 'express'
import CommentController from '../controllers/CommentController'
import { validateData, validateUuid } from '../middlewares/commentMiddleware'

const routes = new Router()

routes.get('/comments', CommentController.index)
routes.get('/comments/:uuid', validateUuid, CommentController.show)
routes.post('/comments', validateData, CommentController.store)
routes.put('/comments/:uuid', validateUuid, validateData, CommentController.update)
routes.delete('/comments/:uuid', validateUuid, CommentController.delete)

export default routes