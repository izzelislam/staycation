const mongoose = require('mongoose')

const imageScheme = new mongoose({
  imageUrl: String,
  required: true
})

module.exports = mongoose.model('Image', imageScheme)