const mongoose = require("mongoose");
const config = require("../config/config");

const productSchema = mongoose.Schema(
  {
    product_name: {
      type: String,
      trim: true,
    },
    product_description: {
      type: String,
      trim: true,
    },
    product_image: {
      type: String,
      trim: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    price: {
      type: Number,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.product_image) {
          data.product_image = `${config.base_url}product_images/${data.product_image}`;
        }
      },
    },
  }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
