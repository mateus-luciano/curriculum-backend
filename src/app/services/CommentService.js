import Comment from '../models/Comment'

class CommentService {
  async showAllComments(page) {
    const limit = 100
    const offset = (page - 1) * limit

    const response = await Comment.findAndCountAll({
      attributes: [
        'name', 
        'content',
        'uuid'
      ],
      order: [
        ['name', 'DESC'],
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
    const response = await Comment.findOne({
      where: {
        uuid
      }
    })

    return response
  }

  async createNewComment(body) {
    const { name, content } = body

    const response = await Comment.create({
      name,
      content
    })

    return response
  }

  async checkUpdateComment(body, uuid) {
    const { name, content } = body

    const response = await Comment.update({
      name,
      content
    },
    {
      where: {
        uuid
      },
      returning: [ 
        'name', 
        'content',
        'uuid'
       ]
    }
    )

    return response[1]
  }

  async deleteComment(uuid) {
    await Comment.destroy({
      where: {
        uuid
      }
    })
  }
}

export default new CommentService()