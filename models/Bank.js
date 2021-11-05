const mongoose = require('mongoose')

const bankScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nameBank: {
    type: String,
    required: true
  },
  nomorRekening: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})


module.exports =  mongoose.model('Bank', bankScheme)