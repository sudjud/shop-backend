const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  name: String,
  reviews: [{
    text: String,
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  }],
  cart: {
    sum: {
      type: Number,
      default: 0
    },
    products: [{
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }]
  },

})

const User = mongoose.model('User', userSchema)

module.exports = User;