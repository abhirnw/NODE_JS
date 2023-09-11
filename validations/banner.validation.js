const Joi = require("joi");

/** Create Banner */
const createBanner = {
  body: Joi.object({
    banner_name: Joi.string().required().trim(),
    banner_description: Joi.string().optional(),
    product_image: Joi.string().allow(""),
    product: Joi.string().required(),
  }),
};

/** Get Banner details */
const getDetails = {
  params: Joi.object({
    productId: Joi.string().required().trim(),
  }),
};

/** Get Banner list */
const getList = {
  query: Joi.object({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

/** Update Banner details */
const updateBanner = {
  params: Joi.object({
    bannerId: Joi.string().required().trim(),
  }),
  body: Joi.object({
    banner_name: Joi.string().trim().optional(),
    banner_description: Joi.string().optional(),
    banner_image: Joi.string().optional(),
    product: Joi.string().optional(),
  }),
};

module.exports = {
  createBanner,
  getDetails,
  getList,
  updateBanner,
};
