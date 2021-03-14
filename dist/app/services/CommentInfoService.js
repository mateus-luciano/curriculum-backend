"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _CommentInfo = require('../models/CommentInfo'); var _CommentInfo2 = _interopRequireDefault(_CommentInfo);

class CommentInfoService {
  async showAllComments(page) {
    const limit = 3
    const offset = (page - 1) * limit

    const response = await _CommentInfo2.default.findAndCountAll({
      attributes: [
        'name', 
        'content'
      ],
      limit,
      offset
    })

    return {
      current_page: page,
      total_pages: Math.ceil(response.count / limit),
      total_comments: response.count,
      data: response.rows,
    }
  }

  async showComment(uuid) {
    const response = await _CommentInfo2.default.findOne({
      where: {
        uuid
      }
    })

    return response
  }

  async createNewComment(body) {
    const { name, content } = body

    const response = await _CommentInfo2.default.create({
      name,
      content
    })

    return response
  }

  async checkUpdateComment(body, uuid) {
    const { name, content } = body

    const response = await _CommentInfo2.default.update({
      name,
      content
    },
    {
      where: {
        uuid
      },
      returning: [ 'name', 'content' ]
    }
    )

    return response[1]
  }

  async deleteComment(uuid) {
    await _CommentInfo2.default.destroy({
      where: {
        uuid
      }
    })
  }
}

exports. default = new CommentInfoService()