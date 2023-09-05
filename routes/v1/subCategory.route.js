const express = require("express");
const { subCategoryValidation } = require("../../validations");
const { subCategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create category */
router.post(
  "/create-subCategory",
  validate(subCategoryValidation.createSubCategory),
  //   auth(),
  subCategoryController.createSubCategory
);

/** category list */
// router.get("/list", auth(), subCategoryController.get);

// router.delete("/delete/:categoryId", categoryController.deleteRecord);

// router.put("/update-category/:categoryId", categoryController.updateCategory);

// /** Get user details by id */
// router.get("/get-details/:categoryId", categoryController.getCategoryDetails);

module.exports = router;
