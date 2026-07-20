require("dotenv").config();
const mongoose = require("mongoose");

exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB CONNECTION SUCCESSFUL");
  } catch (err) {
    console.log("DB CONNECTION ISSUES");
    console.error(err);
    process.exit(1);
  }
};