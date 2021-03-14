"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Contact = require('../models/Contact'); var _Contact2 = _interopRequireDefault(_Contact);

function validateData(req, res, next) {
  const { 
    name, 
    email, 
    phone, 
    message 
  } = req.body

  if (!name) {
    return res.json({ message: 'Preencha o campo nome'})
  }
  if (!email) {
    return res.json({ message: 'Preencha o campo email'})
  }
  if (!phone) {
    return res.json({ message: 'Preencha o campo telefone'})
  }
  if (!message) {
    return res.json({ message: 'Preencha o campo mensagem'})
  }

  next()
}

async function validateUuid(req, res, next) {
  const { uuid } = req.params

  const contact = await _Contact2.default.findOne({
    where: {
      uuid
    }
  })

  if (!contact) {
    return res.json({ message: 'Mensagem de contato não encontrada'})
  }
  
  next()
}

exports.validateData = validateData; exports.validateUuid = validateUuid;