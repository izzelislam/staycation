const mongoose = require('mongoose')

const memberScheme = new mongoose({
  firstName : {
    type: String,
    required
  },
  lastName: {
    type: String,
    required
  },
  email: {
    type: String,
    required
  },
  phoneNumber: {
    type: String,
    required
  }
})

module.exports = mongoose.model('Member', memberScheme)