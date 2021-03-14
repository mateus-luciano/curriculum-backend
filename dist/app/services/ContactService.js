"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Contact = require('../models/Contact'); var _Contact2 = _interopRequireDefault(_Contact);

class ContactService {
  async showAllContacts(page) {
    const limit = 3
    const offset = (page - 1) * limit

    const response = await _Contact2.default.findAndCountAll({
      attributes: [ 
        'name',
        'email', 
        'phone', 
        'message' 
      ],
      limit,
      offset
    })

    return {
      current_page: page,
      total_pages: Math.ceil(response.count / limit),
      total_contacts: response.count,
      data: response.rows,
    }
  }

  async showContact(uuid) {
    const response = await _Contact2.default.findOne({
      where: {
        uuid
      }
    })

    return response
  }

  async createNewContact(body) {
    const { 
        name, 
        email, 
        phone, 
        message 
      } = body

    const response = await _Contact2.default.create({
      name, 
      email, 
      phone, 
      message 
    })

    return response
  }

  async checkUpdateContact(body, uuid) {
    const { 
      name, 
      email, 
      phone, 
      message 
    } = body

    const response = await _Contact2.default.update({
      name, 
      email, 
      phone, 
      message
    },
    {
      where: {
        uuid
      },
      returning: [
        'name',
        'email', 
        'phone', 
        'message' 
      ]
    }
    )

    return response[1]
  }

  async deleteContact(uuid) {
    await _Contact2.default.destroy({
      where: {
        uuid
      }
    })
  }
}

exports. default = new ContactService()