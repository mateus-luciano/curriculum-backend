import Contact from '../models/Contact'

function validateData(req, res, next) {
  const { 
    name, 
    email, 
    phone, 
    message 
  } = req.body

  if (!name || !email || !phone || !message) {
    return res.json({ message: 'Preencha os campos'}).status(400)
  }

  next()
}

async function validateUuid(req, res, next) {
  const { uuid } = req.params

  const contact = await Contact.findOne({
    where: {
      uuid
    }
  })

  if (!contact) {
    return res.json({ message: 'Mensagem de contato não encontrada'}).status(404)
  }
  
  next()
}

export { validateData, validateUuid }