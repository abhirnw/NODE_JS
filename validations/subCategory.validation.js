const Joi = require("joi");

/** Create SubaCtegory */
const createSubCategory = {
  body: Joi.object().keys({
    subCategory_name: Joi.string().required().trim(),
    subCategory_desc: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    category: Joi.string().required(),
  }),
};

module.exports = {
  createSubCategory,
};
