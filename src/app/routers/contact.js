import { Router } from 'express'
import ContactController from '../controllers/ContactController'
import { validateData, validateUuid } from '../middlewares/contactMiddleware'

const routes = new Router()

routes.get('/contact', ContactController.index)
routes.get('/contact/:uuid', validateUuid, ContactController.show)
routes.post('/contact', validateData, ContactController.store)
routes.put('/contact/:uuid', validateUuid, validateData, ContactController.update)
routes.delete('/contact/:uuid', validateUuid, ContactController.delete)

export default routes