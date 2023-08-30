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

/** Get product details */
router.get(
  "/details/:productId",
  validate(productValidation.getDetails),
  productController.getDetails
);

/** Get production list */
router.get(
  "/list",
  validate(productValidation.getList),
  productController.getProductList
);

/** Update product details */
router.put(
  "/update/:productId",
  auth(),
  upload.single("product_image"),
  validate(productValidation.updateProduct),
  productController.updateProduct
);

/** Manage product status */
router.put(
  "/manage-status/:productId",
  auth(),
  validate(productValidation.getDetails),
  productController.manageProductStatus
);

/** Delete product */
router.delete(
  "/delete/:productId",
  auth(),
  validate(productValidation.getDetails),
  productController.deleteProduct
);

module.exports = router;
