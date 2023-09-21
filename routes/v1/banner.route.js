const express = require("express");
const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const { productValidation, bannerValidation } = require("../../validations");
const { bannerController } = require("../../controllers");

const router = express.Router();

/** Create product */
router.post(
  "/create",
  // auth(),
  upload.single("product_image"),
  validate(bannerValidation.createBanner),
  bannerController.createBanner
);

/** Create product and multiple image upload */
router.post(
  "/multiple-banners",
  // auth(),
  upload.array("banner_image"),
  validate(bannerValidation.multipleBanner),
  bannerController.multipleBanner
);

/** Delete product and multiple image upload */
router.delete(
  "/delete/:bannerId",
  // auth(),
  validate(bannerValidation.getBannerDetails),
  bannerController.deleteBanner
);

/** Get product details */
// router.get(
//   "/details/:productId",
//   validate(productValidation.getDetails),
//   productController.getDetails
// );

/** Get production list */
router.get(
  "/list",
  validate(bannerValidation.getList),
  bannerController.getBannerList
);

/** Update product details */
// router.put(
//   "/update/:productId",
//   auth(),
//   upload.single("product_image"),
//   validate(productValidation.updateProduct),
//   productController.updateProduct
// );

/** Manage product status */
// router.put(
//   "/manage-status/:productId",
//   auth(),
//   validate(productValidation.getDetails),
//   productController.manageProductStatus
// );

/** Delete product */
// router.delete(
//   "/delete/:productId",
//   auth(),
//   validate(productValidation.getDetails),
//   productController.deleteProduct
// );

module.exports = router;
