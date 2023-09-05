const { Category, Product } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

const getCategoryList = async (filter, options) => {
  return Category.find();
};

const deleteCategory = async (categoryId) => {
  const usedCategoryInProduct = await Product.findOne({ category: categoryId });
  if (usedCategoryInProduct) {
    throw new Error(
      "This category used in product so you can not delete this category."
    );
  }

  return Category.findByIdAndDelete(categoryId);
};

const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

const getCategoryByName = async (category_name) => {
  return Category.findOne({ category_name });
};

const updateDetails = async (categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

module.exports = {
  createCategory,
  getCategoryList,
  deleteCategory,
  getCategoryById,
  updateDetails,
  getCategoryByName,
};
