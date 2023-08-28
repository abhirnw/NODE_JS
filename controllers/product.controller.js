const { productService } = require("../services");

/** Create product */
const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.product_image = req.file.filename;
    } else {
      throw new Error("Product image is required!");
    }

    await productService.createProduct(reqBody);

    res.status(200).json({
      success: true,
      message: "Product create successfully!",
    });
  } catch (error) {
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
};
