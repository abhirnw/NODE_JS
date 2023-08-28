const express = require("express");
const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const { productValidation } = require("../../validations");
const { productController } = require("../../controllers");

const router = express.Router();

/** Create product */
router.post(
  "/create",
  auth(),
  upload.single("product_image"),
  validate(productValidation.createProduct),
  productController.createProduct
);

module.exports = router;
