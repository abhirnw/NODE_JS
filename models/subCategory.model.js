const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    subCategory_name: {
      type: String,
      trim: true,
    },
    subCategory_desc: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SubCategory = mongoose.model("subCategory", categorySchema);

module.exports = SubCategory;
