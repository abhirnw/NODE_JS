const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  auth(),
  categoryController.createCategory
);

/** category list */
router.get(
  "/list",
  auth(),
  categoryController.categoryList
)

router.delete(
  "/delete/:categoryId",
  categoryController.deleteRecord
)

router.put(
  "/update-category/:categoryId",
  categoryController.updateCategory
)

/** Get user details by id */
router.get(
  "/get-details/:categoryId",
  categoryController.getCategoryDetails
);



module.exports = router;
