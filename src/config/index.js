if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
module.exports = {
    PORT : process.env.PORT,
    MONGO: process.env.MONGO,
    APLICATION_NAME: process.env.APLICATION_NAME
}