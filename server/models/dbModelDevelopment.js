const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Development = new Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model("Development", Development);
