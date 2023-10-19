const Joi = require("joi");
// const { objectId } = require("./custom.validation");

module.exports = {
  /** User go to conversation screen */
  createProduct: Joi.object({
    product_name: Joi.string().required().trim(),
    product_description: Joi.string().optional(),
    product_image: Joi.string().allow(""),
    price: Joi.number().required(),
    category: Joi.string().required(),
  }),
};
