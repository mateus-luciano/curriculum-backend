import Sequelize from 'sequelize'
import databaseConfig from '../config/database'
import Contact from '../app/models/Contact'
import Comment from '../app/models/Comment'
import CommentInfo from '../app/models/CommentInfo'

const models = [ Contact, Comment, CommentInfo ]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

export default new Database()
