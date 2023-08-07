const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const EmpRoutes = require("./routes/employeeRoute");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5900;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, (request, response) => {
  console.log(`Server Running on port ${PORT}`);
});

app.use(EmpRoutes);

mongoose
  .connect(process.env.MANGODB_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });
