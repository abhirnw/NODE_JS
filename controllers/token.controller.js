const { tokenService } = require("../services");
const moment = require("moment");

/** Create token in jsonwebtoken and save in our database. */
const generateToken = async (req, res) => {
  try {
    const reqBody = req.body;

    reqBody.expire_time = moment().add(10, "minutes");

    /** Create token in jsonwebtoken */
    const token = await tokenService.generateToken(reqBody);

    reqBody.token = token;

    /** Save token in our database */
    const saveToken = await tokenService.saveToken(reqBody);

    res
      .status(200)
      .json({ success: true, message: "Token created!", data: saveToken });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Something went wrong!",
    });
  }
};

/** Verify token */
const verifyToken = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Token successfully verified!",
    data: req.user,
  });
};

module.exports = {
  generateToken,
  verifyToken,
};
