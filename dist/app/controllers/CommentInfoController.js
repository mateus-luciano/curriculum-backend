"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }var _CommentInfoService = require('../services/CommentInfoService'); var _CommentInfoService2 = _interopRequireDefault(_CommentInfoService);

class CommentInfoController {
  async index(req, res) {
    const { page } = req.query 

    try {
      const data = await _CommentInfoService2.default.showAllComments(_nullishCoalesce(page, () => ( 1)))
      
      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async show(req, res) {
    const { uuid } = req.params
    
    try {
      const data = await _CommentInfoService2.default.showComment(uuid)
      
      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async store(req, res) {
    try {
      const data = await _CommentInfoService2.default.createNewComment(req.body)

      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async update(req, res) {
    const { uuid } = req.params

    try {
      const data = await _CommentInfoService2.default.checkUpdateComment(req.body, uuid)
      
      return res.json(data)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }

  async delete(req, res) {
    const { uuid } = req.params

    try {
      await _CommentInfoService2.default.deleteComment(uuid)
      
      return res.sendStatus(204)
    } catch (error) {
      return res.status(error.status || 400).json(error)
    }
  }
}

exports. default = new CommentInfoController()