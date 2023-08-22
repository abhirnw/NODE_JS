const { Category } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

const getCategoryList = async (filter, options) => {
  return Category.find()
};

const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

const getCategoryByName = async(categoryName) => {
  return Category.findOne({ categoryName });
}

const updateDetails = async (categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

module.exports = {
  createCategory,
  getCategoryList,
  deleteCategory,
  getCategoryById,
  updateDetails,
  getCategoryByName
};
