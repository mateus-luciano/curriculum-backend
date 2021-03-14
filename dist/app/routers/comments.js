"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CommentController = require('../controllers/CommentController'); var _CommentController2 = _interopRequireDefault(_CommentController);
var _commentMiddleware = require('../middlewares/commentMiddleware');

const routes = new (0, _express.Router)()

routes.get('/comments', _CommentController2.default.index)
routes.get('/comments/:uuid', _commentMiddleware.validateUuid, _CommentController2.default.show)
routes.post('/comments', _commentMiddleware.validateData, _CommentController2.default.store)
routes.put('/comments/:uuid', _commentMiddleware.validateUuid, _commentMiddleware.validateData, _CommentController2.default.update)
routes.delete('/comments/:uuid', _commentMiddleware.validateUuid, _CommentController2.default.delete)

exports. default = routes