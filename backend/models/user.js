import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'], 
  },
  phone: {
    type: String,
    maxlength: 10,
  },
  emergency_contact: {
    type: String,
    maxlength: 10,
  },
  address: {
    type: String,
    maxlength: 255,
  },
  role: {
    type: String,
    enum: ['User', 'Admin', 'SecurityGuard'],
    default: 'User',
  },
});

const User = mongoose.model('User', userSchema);

export default User;
