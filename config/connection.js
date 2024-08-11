const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGOURI;
const connectDb = async () => {
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Database connection error: ", err);
  }
};
module.exports = connectDb;
