const Joi = require("joi");

/** Create product */
const createProduct = {
  body: Joi.object({
    product_name: Joi.string().required().trim(),
    product_description: Joi.string().optional(),
    product_image: Joi.string().allow(""),
    price: Joi.number().required(),
    category: Joi.string().required(),
  }),
};

module.exports = {
  createProduct,
};
