const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

exports.dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {})
    .then(() => console.log("MongoDB가 연결되었습니다."))
    .catch((err) => {
      console.log(err);
    });
};
