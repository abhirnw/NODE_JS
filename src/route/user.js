const express = require("express");
const routes = express.Router();
const { userController } = require("../controller/index");
const { auth } = require("../middleware/auth");

routes.post("/register", userController.register);
routes.post("/login", userController.login);
routes.get("/allusers", userController.getAllUser);

module.exports = routes;
