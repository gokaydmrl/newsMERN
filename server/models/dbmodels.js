const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Opinion = new Schema({
  fullName: String,
  opinion: String,
});

const Development = new Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model("Opinion", Opinion);
module.exports = mongoose.model("Development", Development);
