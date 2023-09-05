const Category = require("../models/category.model");
const { subCategoryService, userService } = require("../services");

/** create category */
const createSubCategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const categoryEx = await subCategoryService.getCategoryByName(
      reqBody.subCategory_name
    );
    if (categoryEx) {
      throw new Error(
        `please add other Sub-Category this ${categoryEx.subCategory_name} category already created.`
      );
    }

    const Subcategory = await subCategoryService.createSubCategory(reqBody);

    res.status(200).json({
      success: true,
      message: "Sub-Category create successfully!",
      data: {
        Subcategory,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const subCategoryList = async (req, res) => {
  try {
    const getCategory = await categoryService.getCategoryList();

    res.status(200).json({
      success: true,
      message: "Category List!",
      data: {
        getCategory,
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

/** Get Category details by id */
const getCategoryDetails = async (req, res) => {
  try {
    const getDetails = await categoryService.getCategoryById(
      req.params.categoryId
    );
    if (!getDetails) {
      throw new Error("Category not found!");
    }

    res.status(200).json({
      success: true,
      message: "Category details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSubCategory,
  subCategoryList,
  deleteRecord,
  updateCategory,
  getCategoryDetails,
};
