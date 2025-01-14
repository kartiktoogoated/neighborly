const express = require('express');
const House = require('../models/house');  // Correct path
const User = require('../models/user');    // Correct path
const router = express.Router();

// Admin registers a house
router.post('/register', async (req, res) => {
  try {
    const newHouse = new House(req.body);  // Body should include house_number, number_of_members
    await newHouse.save();
    res.status(201).json(newHouse);  // Return the newly registered house
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error registering house', error });
  }
});

// Get all houses
router.get('/', async (req, res) => {
  try {
    const houses = await House.find();
    res.status(200).json(houses);  // Return all houses
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error fetching houses', error });
  }
});

// Admin verifies the first user and updates house info
router.put('/verify-first-user/:house_number', async (req, res) => {
  const { house_number } = req.params;
  const { user_id, temporary_password } = req.body;

  try {
    // Find the house based on house_number
    const house = await House.findOne({ house_number });

    if (!house) {
      return res.status(404).json({ message: 'House not found' });
    }

    // Verify that no tenant is assigned yet
    if (house.is_verified) {
      return res.status(400).json({ message: 'House is already verified' });
    }

    // Find the user by user_id
    const user = await User.findOne({ user_id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the house with tenant info and verification flag
    house.is_verified = true;
    house.tenant_info = user._id;
    house.gmail = user.email;  // Assign user's email to the house (if applicable)
    house.password = temporary_password;  // Provide temporary password

    await house.save();

    // Optionally, you can also update the user's status to indicate that they have been verified.

    res.status(200).json({ message: 'House verified and tenant assigned', house });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error verifying user and updating house', error });
  }
});

module.exports = router;
