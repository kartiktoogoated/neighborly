const express = require('express');
const User = require('../models/user');  // Correct path

const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);  // Return the created user
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error creating user', error });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);  // Return all users
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error fetching users', error });
  }
});

// Get a user by user_id
router.get('/:user_id', async (req, res) => {
  try {
    const user = await User.findOne({ user_id: req.params.user_id });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);  // Return the user found
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error fetching user', error });
  }
});

// Update a user by user_id
router.put('/:user_id', async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { user_id: req.params.user_id },
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);  // Return the updated user
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating user', error });
  }
});

// Delete a user by user_id
router.delete('/:user_id', async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ user_id: req.params.user_id });
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error deleting user', error });
  }
});

module.exports = router;
