const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    user_id: { // Custom user_id field (instead of _id)
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'], // Basic email validation
    },
    phone_number: {
      type: String,
      required: false, // Optional field
    },
    role: {
      type: String,
      enum: ['User', 'Admin', 'SecurityGuard'],
      default: 'User',
    },
    house_number: {
      type: Number,
      required: true,
      ref: 'House', // Reference to the House collection
    },
  },
  { timestamps: true, _id: false } // Disable _id field
);

// Adding a virtual field `id` to allow usage of `user_id`
userSchema.virtual('id').get(function() {
  return this.user_id;
});

module.exports = mongoose.model('User', userSchema);
