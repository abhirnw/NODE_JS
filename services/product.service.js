const { default: mongoose } = require("mongoose");
const { Product } = require("../models");

/**
 * Get product details
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const getProductById = async (productId) => {
  return Product.findOne({ _id: productId }).populate({
    path: "category",
    select: ["category_name"],
  });
};

/**
 * Get product details using aggregation
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const getProductDetails = async (productId) => {
  return Product.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(productId) },
    },
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        pipeline: [
          {
            $lookup: {
              from: "sub_categories",
              localField: "_id",
              foreignField: "category",
              as: "sub_category",
            },
          },
          {
            $unwind: {
              path: "$sub_category",
              preserveNullAndEmptyArrays: true,
            },
          },
        ],
        as: "category",
      },
    },
    {
      $unwind: {
        path: "$category",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "sub_categories",
        localField: "sub_category",
        foreignField: "_id",
        as: "sub_category",
      },
    },
    {
      $unwind: {
        path: "$sub_category",
        preserveNullAndEmptyArrays: true,
      },
    },
  ]);
};

/**
 * Get product list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Product>}
 */
const getProductList = async (filter, options) => {
  const skip = Number((options.page || 1) - 1) * Number(options.limit || 10);
  return Product.find(filter)
    .limit(Number(options.limit))
    .skip(Number(skip))
    .populate("category")
    .populate("sub_category");
};

/**
 * Create product
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

/**
 * Update product details
 * @param {ObjectId} productId
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const updateProduct = async (productId, reqBody) => {
  return Product.findOneAndUpdate(
    { _id: productId },
    { $set: reqBody },
    { new: true }
  );
};

/**
 * Manage product status
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const manageProductStatus = async (productId) => {
  const productExists = await getProductById(productId);
  if (!productExists) {
    throw new Error("Product not found!");
  }

  return Product.findOneAndUpdate(
    { _id: productId },
    {
      $set: {
        is_active: !productExists.is_active,
      },
    },
    { new: true }
  );
};

/**
 * Delete product
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const deleteProduct = async (productId) => {
  return Product.findOneAndDelete({ _id: productId });
};

module.exports = {
  getProductById,
  getProductDetails,
  getProductList,
  createProduct,
  updateProduct,
  manageProductStatus,
  deleteProduct,
};
