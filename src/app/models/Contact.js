import Sequelize, { Model } from 'sequelize'

class Contact extends Model {
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
        email: {
          type: Sequelize.DataTypes.STRING(70),
          allowNull: false
        },
        phone: {
          type: Sequelize.DataTypes.STRING(20),
          allowNull: false
        },
        message: {
          type: Sequelize.DataTypes.STRING(400),
          allowNull: false
        },
      },
      {
        sequelize,
        tableName: 'contact',
        schema: 'api_growdev'
      }
    )
    return this
  }
}

export default Contact