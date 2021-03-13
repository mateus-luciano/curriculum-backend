import Comment from '../models/Comment'

function validateData(req, res, next) {
  const { name, content } = req.body

  if (!name) {
    return res.json({ message: 'Preencha o campo nome '})
  }
  if (!content) {
    return res.json({ message: 'Preencha o campo comentário '})
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
    return res.json({ message: 'Comentário não encontrado'})
  }
  
  next()
}

export { validateData, validateUuid }