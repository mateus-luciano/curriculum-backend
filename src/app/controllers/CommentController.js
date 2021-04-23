import CommentRepository from '../repositories/CommentRepository';

class CommentController {
  async index(req, res) {
    const { page } = req.query 

    try {
      const data = await CommentRepository.getAll(page ?? 1)
      
      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async show(req, res) {
    const { uuid } = req.params
    
    try {
      const data = await CommentRepository.find(uuid)
      
      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async store(req, res) {
    try {
      const data = await CommentRepository.save(req.body)

      return res.json(data).status(201)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async update(req, res) {
    const { uuid } = req.params

    try {
      const data = await CommentRepository.update(req.body, uuid)
      
      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async delete(req, res) {
    const { uuid } = req.params

    try {
      await CommentRepository.remove(uuid)
      
      return res.sendStatus(204)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }
}

export default new CommentController()