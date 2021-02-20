const mongoose = require("mongoose");
const URI = process.env.DB_CNN;

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
