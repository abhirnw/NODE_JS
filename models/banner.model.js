const mongoose = require("mongoose");
const config = require("../config/config");

const bannerSchema = mongoose.Schema(
  {
    banner_name: {
      type: String,
      trim: true,
    },
    banner_description: {
      type: String,
      trim: true,
    },
    banner_image: {
      type: String,
      trim: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "products",
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
        if (data?.banner_image) {
          data.banner_image = `${config.base_url}banner_images/${data.banner_image}`;
        }
      },
    },
  }
);

const Banner = mongoose.model("banner", bannerSchema);

module.exports = Banner;
