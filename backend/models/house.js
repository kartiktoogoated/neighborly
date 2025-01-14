const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema(
  {
    house_number: {
      type: Number,
      required: true,
      unique: true,
    },
    gmail: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'], // Basic email validation
    },
    password: {
      type: String,
      required: true,
    },
    number_of_members: {
      type: Number,
      required: true,
      min: [1, 'There must be at least one member in the house'],
    },
  },
  { _id: false } // Disable the _id field
);

module.exports = mongoose.model('House', houseSchema);
