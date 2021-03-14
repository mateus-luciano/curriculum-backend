"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CommentInfoController = require('../controllers/CommentInfoController'); var _CommentInfoController2 = _interopRequireDefault(_CommentInfoController);
var _commentMiddleware = require('../middlewares/commentMiddleware');

const routes = new (0, _express.Router)()

routes.get('/commentsinfo', _CommentInfoController2.default.index)
routes.get('/commentsinfo/:uuid', _commentMiddleware.validateUuid, _CommentInfoController2.default.show)
routes.post('/commentsinfo', _commentMiddleware.validateData, _CommentInfoController2.default.store)
routes.put('/commentsinfo/:uuid', _commentMiddleware.validateUuid, _commentMiddleware.validateData, _CommentInfoController2.default.update)
routes.delete('/commentsinfo/:uuid', _commentMiddleware.validateUuid, _CommentInfoController2.default.delete)

exports. default = routes