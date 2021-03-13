import CommentService from "../services/CommentService"

class CommentController {
  async index(req, res) {
    const { page } = req.query 

    try {
      const data = await CommentService.showAllComments(page ?? 1)
      
      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async show(req, res) {
    const { uuid } = req.params
    
    try {
      const data = await CommentService.showComment(uuid)
      
      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async store(req, res) {
    try {
      const data = await CommentService.createNewComment(req.body)

      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async update(req, res) {
    const { uuid } = req.params

    try {
      const data = await CommentService.checkUpdateComment(req.body, uuid)
      
      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async delete(req, res) {
    const { uuid } = req.params

    try {
      await CommentService.deleteComment(uuid)
      
      return res.sendStatus(204)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }
}

export default new CommentController()