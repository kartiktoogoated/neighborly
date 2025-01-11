import mongoose from 'mongoose';

const adminActionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  action_type: {
    type: String,
    required: true,
    maxlength: 50, // Limit action type length
  },
  action_description: {
    type: String,
    required: true,
    maxlength: 500, // Limit description length
  },
  action_time: {
    type: Date,
    default: Date.now, // Log the current time of the action
  },
});

// Create an index for `user_id` to optimize queries
adminActionSchema.index({ user_id: 1 });

const AdminAction = mongoose.model('AdminAction', adminActionSchema);

export default AdminAction;
