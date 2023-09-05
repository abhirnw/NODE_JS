const express = require("express");
const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");

const router = express.Router();

router.use("/token", tokenRoutes);
router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product", productRoute);

module.exports = router;
