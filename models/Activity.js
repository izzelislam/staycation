const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const activityScheme = new mongoose({
  name : {
    type: String,
    required
  },
  type: {
    type: String,
    required
  },
  imageUrl: {
    type: String,
    required
  },
  isPopular: {
    type: Boolean
  },
  itemId: {
    type: ObjectId,
    ref: 'Item'
  }
})

module.exports = mongoose.model('Activity', activityScheme)