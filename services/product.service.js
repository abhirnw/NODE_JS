const { Product } = require("../models");

/**
 * Create product
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

module.exports = {
  createProduct,
};
