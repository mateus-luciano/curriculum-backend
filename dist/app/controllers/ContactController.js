"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }var _ContactService = require('../services/ContactService'); var _ContactService2 = _interopRequireDefault(_ContactService);

class ContactController {
  async index(req, res) {
    const { page } = req.query 

    try {
      const data = await _ContactService2.default.showAllContacts(_nullishCoalesce(page, () => ( 1)))

      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async show(req, res) {
    const { uuid } = req.params

    try {
      const data = await _ContactService2.default.showContact(uuid)

      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async store(req, res) {
    try {
      const data = await _ContactService2.default.createNewContact(req.body)

      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async update(req, res) {
    const { uuid } = req.params

    try {
      const data = await _ContactService2.default.checkUpdateContact(req.body, uuid)

      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async delete(req, res) {
    const { uuid } = req.params

    try {
      await _ContactService2.default.deleteContact(uuid)
      
      return res.sendStatus(204)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }
}

exports. default = new ContactController()