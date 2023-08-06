const jwt = require("jsonwebtoken");
const { Token } = require("../models");
const config = require("../config/config");

/**
 * Create token in jsonwebtoken
 * @param {object} reqBody
 * @returns {Promise<>}
 */
const generateToken = async (reqBody) => {
  let payload = {
    ...reqBody,
    expire_time: reqBody.expire_time.unix(),
  };

  return jwt.sign(payload, config.jwt.secret_key);
};

/**
 * Save token in our database
 * @param {object} reqBody
 * @returns {Promise<Token>}
 */
const saveToken = async (reqBody) => {
  return Token.findOneAndUpdate(
    { user: reqBody.user },
    {
      $set: {
        ...reqBody,
      },
    },
    { new: true, upsert: true }
  );
};

module.exports = {
  generateToken,
  saveToken,
};
