const Joi = require("joi");

/** Create SubaCtegory */
const createSubCategory = {
  body: Joi.object().keys({
    subCategory_name: Joi.string().required().trim(),
    subCategory_desc: Joi.string().required().trim(),
    category: Joi.string().required(),
  }),
};

module.exports = {
  createSubCategory,
};
