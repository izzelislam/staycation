const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema


const bookingScheme = new mongoose({
  bookingStartDate: {
    type: Date,
    required
  },
  bookingEndDate: {
    type: Date,
    required
  },
  itemId: {
    _id: {
      type: ObjectId,
      ref: 'Item',
      required
    },
    price: {
      type: Number,
      required
    },
    night:{
      type: Number,
      required
    }
  },
  memberId: {
    type: ObjectId,
    ref : 'Member',
  },
  bankId: {
    type: ObjectId,
    ref: 'Bank'
  },
  proofPayment: {
    type: String,
    required
  },
  bankFrom: {
    type: String,
    required
  },
  accountHolder: {
    type: String,
    required
  },
  imageUrl: {
    type: String,
    required
  },
  status: {
    type: String,
    required
  }
})

module.exports = mongoose.model('Booking', bookingScheme)