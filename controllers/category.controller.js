const Category = require("../models/category.model");
const { categoryService, userService } = require("../services");

/** create category */
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;
    console.log(reqBody,'===========================');

    const category = await categoryService.getCategoryById(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Category create successfully!",
      data: {
        // category,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const categoryList = async (req, res) => {
  try {
    const getCategory = await categoryService.getCategoryList();
    const getUsers = await userService.getUserList();
    res.status(200).json({
      success: true,
      message: "Category List!",
      data: {
        getCategory,
        getUsers,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteRecord = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const cateExists = await categoryService.getCategoryById(categoryId);
    if (!cateExists) {
      throw new Error("Category not found!");
    }

    await categoryService.deleteCategory(categoryId);

    res.status(200).json({
      success: true,
      message: "Category delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const cateExists = await categoryService.getCategoryById(categoryId);
    if (!cateExists) {
      throw new Error("Category not found!");
    }

    await categoryService.updateDetails(categoryId, req.body);

    res.status(200).json({
      success: true,
      message: "Category details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCategory,
  categoryList,
  deleteRecord,
  updateCategory,
};
