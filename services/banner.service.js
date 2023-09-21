const { Banner } = require("../models");

/**
 * Get Banner details
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const getBannerById = async (bannerId) => {
  return Banner.findOne({ _id: bannerId });
};

/**
 * Get Banner list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Product>}
 */
const getList = async () => {
  return Banner.find().populate("product");
};

/**
 * Create product
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const createBanner = async (reqBody) => {
  return Banner.create(reqBody);
};

/**
 * Update Banner details
 * @param {ObjectId} productId
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const updateBanner = async (productId, reqBody) => {
  return Banner.findOneAndUpdate(
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
const manageBannerStatus = async (productId) => {
  const productExists = await getProductById(productId);
  if (!productExists) {
    throw new Error("Banner not found!");
  }

  return Banner.findOneAndUpdate(
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
const deleteBanner = async (productId) => {
  return Banner.findOneAndDelete({ _id: productId });
};

module.exports = {
  getBannerById,
  getList,
  createBanner,
  updateBanner,
  manageBannerStatus,
  deleteBanner,
};
