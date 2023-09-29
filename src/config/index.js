const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    mongoose.connect(
      "mongodb+srv://abhirnw:AgLMyiRjInyF2dVN@rnw.nt28nmi.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database Connected successfully");
  } catch (err) {
    console.log("=====err=====", err);
  }
};

module.exports = { dbConnection };
