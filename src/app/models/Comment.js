import Sequelize, { Model } from 'sequelize'

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        uuid: {
          type: Sequelize.DataTypes.UUID,
          allowNull: false,
          defaultValue: Sequelize.DataTypes.UUIDV1,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING(120),
          allowNull: false
        },
        content: {
          type: Sequelize.DataTypes.STRING(240),
          allowNull: false
        },
      },
      {
        sequelize,
        tableName: 'comments',
        schema: 'api_growdev'
      }
    )
    return this
  }
}

export default Comment