const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  address: [
    {
      street: { type: String, required: true },
      number: { type: Number, required: true },
      complement: { type: String },
      zip: { type: String, required: true },
      createdAt: { type: Date, required: true }
    }
  ],
  createdAt: { type: Date, required: true },
  favorite_prod: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'products'
    },
    createdAt: { type: Date, required: true }
  },
  isAdmin: { type: Boolean, required: true, default: false }
});

const User = mongoose.model('users', userSchema);

module.exports = User;
