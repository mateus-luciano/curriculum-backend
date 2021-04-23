import Comment from '../models/Comment'

function validateData(req, res, next) {
  const { name, content } = req.body

  if (!name || !content) {
    return res.json({ message: 'Preencha os campos '}).status(400)
  }

  next()
}

async function validateUuid(req, res, next) {
  const { uuid } = req.params

  const contact = await Comment.findOne({
    where: {
      uuid
    }
  })

  if (!contact) {
    return res.json({ message: 'Comentário não encontrado'}).status(404)
  }
  
  next()
}

export { validateData, validateUuid }