const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const URI = process.env.MONGO_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("connected to db")
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.get("/", function (req, res) {
  res.send("without problem running");
});

app.use("/", require("./routes/newsRouter"));

app.listen(3001, function () {
  console.log("express server is running on port 3001");
});
