const Category = require("../models/category.model");
const User = require("../models/user.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

/**
 * Get user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getUserList = async (filter, options) => {
  return User.find();
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Get user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getUserById = async (userId) => {
  return User.findById(userId);
};

/**
 * user details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<User>}
 */
const updateDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

const deleteUserByEmail = async (email) => {
  return User.findOneAndDelete({ email: email });
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateDetails,
  getUserByEmail,
  deleteUser,
  deleteUserByEmail,
};
