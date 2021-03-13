import Contact from '../models/Contact'

class ContactService {
  async showAllContacts(page) {
    const limit = 3
    const offset = (page - 1) * limit

    const response = await Contact.findAndCountAll({
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
    const response = await Contact.findOne({
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

    const response = await Contact.create({
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

    const response = await Contact.update({
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
    await Contact.destroy({
      where: {
        uuid
      }
    })
  }
}

export default new ContactService()