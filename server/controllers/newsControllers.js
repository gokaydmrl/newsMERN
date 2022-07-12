const Opinion = require("../models/dbModelOpinion");

exports.getOpinionsHandler = async (req, res) => {
  const opininonItem = await Opinion.find();
  res.status(200).json(opininonItem);
  console.log("ops", opininonItem);
};
/////

exports.createOpinionHandler = async (req, res) => {
  const id = req.params.id;
  console.log("req.params.id", id);
  const { fullName, opinion } = req.body;

  const commentItem = await Opinion.create({
    fullName,
    opinion,
    categoryID: id,
  });
  res.status(201).json(commentItem);
};

// Opinion.create({
//     fullName:"djokovic",
//     opinion:"the goat"
// })

//////

const Development = require("../models/dbModelDevelopment");

exports.getNewsHandler = async (req, res) => {
  const developmentItem = await Development.find();
  res.status(200).json(developmentItem);
};

// Development.create({
//   title: "world",
// content: "energy crisis"
// })

// get one news

exports.getNewsItemHandler = async (req, res) => {
  const { id } = req.params;

  const newsItem = await Development.findById(id);
  res.status(200).json(newsItem);
};

// get one opinion

exports.getOpinionItemHandler = async (req, res) => {
  const { id } = req.params;

  const opinionItem = await Opinion.findById(id);
  res.status(200).json(opinionItem);
};
