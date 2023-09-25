const jwt = require("jsonwebtoken");
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";

const auth = (token, roles) => {
  jwt.verify(token, jwtSecrectKey, (err, decoded) => {
    if (err || !roles.find((ele) => ele === decoded.role)) {
      console.log("=====err=====", err);
      throw Error("Please authenticate");
    }
  });
};

module.exports = {
  auth,
};
