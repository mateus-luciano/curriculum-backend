import Contact from '../models/Contact'

function validateData(req, res, next) {
  const { 
    name, 
    email, 
    phone, 
    message 
  } = req.body

  if (!name) {
    return res.json({ message: 'Preencha o campo nome'})
  }
  if (!email) {
    return res.json({ message: 'Preencha o campo email'})
  }
  if (!phone) {
    return res.json({ message: 'Preencha o campo telefone'})
  }
  if (!message) {
    return res.json({ message: 'Preencha o campo mensagem'})
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
    return res.json({ message: 'Mensagem de contato não encontrada'})
  }
  
  next()
}

export { validateData, validateUuid }