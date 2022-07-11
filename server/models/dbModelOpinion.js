const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Opinion = new Schema({
  fullName: String,
  opinion: String,
});

module.exports = mongoose.model("Opinion", Opinion);
