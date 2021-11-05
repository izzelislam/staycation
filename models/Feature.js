const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const featureSchema = new mongoose({
  name: {type: String, required},
  qty: {
    type: Number,
    required
  },
  imageUrl : {
    type: String,
    require
  },
  itemId: {
    type: ObjectId,
    ref: 'Item'
  }
})

module.exports = mongoose.model('Feature', featureSchema)