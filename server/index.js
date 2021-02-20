const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const path = require('path');
require("dotenv").config();

const { mongoose } = require("./database");

//Settings

//public directory

app.use(express.static("public"));

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//CORS
app.use(cors());


//Routes
app.use("/api/employees", require("./routes/employee.routes"));

//manejar rutas Angular
app.get("**", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});
//Starting server
app.listen(process.env.PORT, () => {
  console.log(`Server on port ${process.env.PORT}`);
});
