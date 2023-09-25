const express = require("express");
const app = express();
const db = require("./src/config/index");
const { userRoute } = require("./src/route/index");
require("dotenv").config();

db.dbConnection();

app.use(express.json());
app.use("/", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`=====server_connected ${process.env.PORT}=====`);
});
