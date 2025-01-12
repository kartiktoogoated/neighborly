
import axiosInstance from './axiosInstance.js';

// Create a new user
export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/user', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Get all users
export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get('/api/user');
    return response.data; // Return the list of users
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Get a user by user_id
export const getUserById = async (userId) => {
  try {
    const response = await axiosInstance.get(`/api/user/${userId}`);
    return response.data; // Return the user
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Update a user by user_id
export const updateUserById = async (userId, updatedData) => {
  try {
    const response = await axiosInstance.put(`/api/user/${userId}`, updatedData);
    return response.data; // Return the updated user
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// Delete a user by user_id
export const deleteUserById = async (userId) => {
  try {
    const response = await axiosInstance.delete(`/${userId}`);
    return response.data; // Return the delete confirmation
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

