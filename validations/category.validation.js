const Joi = require("joi");

/** create category */
const createCategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_desc: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
  }),
};

module.exports = {
  createCategory
};
