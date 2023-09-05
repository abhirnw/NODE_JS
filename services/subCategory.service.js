const { SubCategory, Product } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createSubCategory = async (reqBody) => {
  return SubCategory.create(reqBody);
};

const getSubCategoryList = async (filter, options) => {
  return SubCategory.find();
};

const deleteCategory = async (categoryId) => {
  const usedCategoryInProduct = await Product.findOne({ category: categoryId });
  if (usedCategoryInProduct) {
    throw new Error(
      "This category used in product so you can not delete this category."
    );
  }

  return SubCategory.findByIdAndDelete(categoryId);
};

const getCategoryById = async (categoryId) => {
  return SubCategory.findById(categoryId);
};

const getCategoryByName = async (subCategory_name) => {
  return SubCategory.findOne({ subCategory_name });
};

const updateDetails = async (categoryId, updateBody) => {
  return SubCategory.findByIdAndUpdate(categoryId, { $set: updateBody });
};

module.exports = {
  createSubCategory,
  getSubCategoryList,
  deleteCategory,
  getCategoryById,
  updateDetails,
  getCategoryByName,
};
