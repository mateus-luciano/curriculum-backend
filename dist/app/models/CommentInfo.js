"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class CommentInfo extends _sequelize.Model {
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
        content: {
          type: _sequelize2.default.DataTypes.STRING(240),
          allowNull: false
        },
      },
      {
        sequelize,
        tableName: 'comments_info',
        schema: 'api_growdev'
      }
    )
    return this
  }
}

exports. default = CommentInfo