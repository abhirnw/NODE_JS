const express = require("express");
const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");
const subCategoryRoute = require("./subCategory.route");
const bannerRoute = require("./banner.route");

const router = express.Router();

router.use("/token", tokenRoutes);
router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product", productRoute);
router.use("/sub-category", subCategoryRoute);
router.use("/banner", bannerRoute);

module.exports = router;
