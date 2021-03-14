"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Comment = require('../models/Comment'); var _Comment2 = _interopRequireDefault(_Comment);

function validateData(req, res, next) {
  const { name, content } = req.body

  if (!name) {
    return res.json({ message: 'Preencha o campo nome '})
  }
  if (!content) {
    return res.json({ message: 'Preencha o campo comentário '})
  }

  next()
}

async function validateUuid(req, res, next) {
  const { uuid } = req.params

  const contact = await _Comment2.default.findOne({
    where: {
      uuid
    }
  })

  if (!contact) {
    return res.json({ message: 'Comentário não encontrado'})
  }
  
  next()
}

exports.validateData = validateData; exports.validateUuid = validateUuid;