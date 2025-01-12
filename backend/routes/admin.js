import express from 'express';
import AdminAction from '../models/admin.js';
import User from '../models/user.js';
import mongoose from 'mongoose';

const router = express.Router();

router.post('/log-action', async (req, res) => {
  try {
    const { user_id, action_type, action_description } = req.body;

    if (!mongoose.Types.ObjectId.isValid(user_id)) {
      return res.status(400).json({ message: 'Invalid user_id' });
    }

    const user = await User.findOne({ _id: user_id });
    if (!user || user.role !== 'Admin') {
      return res.status(403).json({ message: 'Only admins can perform this action' });
    }

    const newAdminAction = new AdminAction({
      user_id,
      action_type,
      action_description,
    });

    await newAdminAction.save();
    res.status(201).json(newAdminAction);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error logging admin action', error });
  }
});

router.get('/admin-actions', async (req, res) => {
  try {
    const actions = await AdminAction.find()
      .populate('user_id', 'name email role') 
      .exec();
    res.status(200).json(actions);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error fetching admin actions', error });
  }
});

export default router;
