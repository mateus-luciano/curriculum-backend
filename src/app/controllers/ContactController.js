import ContactService from '../services/ContactService'

class ContactController {
  async index(req, res) {
    const { page } = req.query 

    try {
      const data = await ContactService.showAllContacts(page ?? 1)

      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async show(req, res) {
    const { uuid } = req.params

    try {
      const data = await ContactService.showContact(uuid)

      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async store(req, res) {
    try {
      const data = await ContactService.createNewContact(req.body)

      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async update(req, res) {
    const { uuid } = req.params

    try {
      const data = await ContactService.checkUpdateContact(req.body, uuid)

      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async delete(req, res) {
    const { uuid } = req.params

    try {
      await ContactService.deleteContact(uuid)
      
      return res.sendStatus(204)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }
}

export default new ContactController()