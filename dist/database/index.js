"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Contact = require('../app/models/Contact'); var _Contact2 = _interopRequireDefault(_Contact);
var _Comment = require('../app/models/Comment'); var _Comment2 = _interopRequireDefault(_Comment);
var _CommentInfo = require('../app/models/CommentInfo'); var _CommentInfo2 = _interopRequireDefault(_CommentInfo);

const models = [ _Contact2.default, _Comment2.default, _CommentInfo2.default ]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default)

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

exports. default = new Database()
