"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Contact extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        uuid: {
          type: _sequelize2.default.DataTypes.UUID,
          allowNull: false,
          defaultValue: _sequelize2.default.DataTypes.UUIDV1,
          primaryKey: true,
        },
        name: {
          type: _sequelize2.default.DataTypes.STRING(120),
          allowNull: false
        },
        email: {
          type: _sequelize2.default.DataTypes.STRING(70),
          allowNull: false
        },
        phone: {
          type: _sequelize2.default.DataTypes.STRING(20),
          allowNull: false
        },
        message: {
          type: _sequelize2.default.DataTypes.STRING(400),
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

exports. default = Contact