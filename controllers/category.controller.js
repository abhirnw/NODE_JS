const Category = require("../models/category.model");
const { categoryService } = require("../services");

/** create category */
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const category = await categoryService.createCategory(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Category create successfully!",
      data: { category },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getCategoryList = async (req, res) => {
  try {
    const getCategory =  await categoryService.getCategoryList
  } catch (error) {
    
  }
}

module.exports = {
    createCategory,
};
