import CommentInfo from '../models/CommentInfo'

class CommentInfoService {
  async showAllComments(page) {
    const limit = 3
    const offset = (page - 1) * limit

    const response = await CommentInfo.findAndCountAll({
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
    const response = await CommentInfo.findOne({
      where: {
        uuid
      }
    })

    return response
  }

  async createNewComment(body) {
    const { name, content } = body

    const response = await CommentInfo.create({
      name,
      content
    })

    return response
  }

  async checkUpdateComment(body, uuid) {
    const { name, content } = body

    const response = await CommentInfo.update({
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
    await CommentInfo.destroy({
      where: {
        uuid
      }
    })
  }
}

export default new CommentInfoService()