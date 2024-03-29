const Opinion = require("../models/dbModelOpinion");

// Opinion.deleteMany({}, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else if (res) {
//     console.log("başarılı");
//   }
// });

exports.getOpinionsHandler = async (req, res) => {
  const opininonItem = await Opinion.find();
  res.status(200).json(opininonItem);
  console.log("ops", opininonItem);
};
/////

exports.createOpinionHandler = async (req, res) => {
  const id = req.params.id;
  // console.log("req.params.id", id);
  const { fullName, opinion } = req.body;

  const commentItem = await Opinion.create({
    fullName,
    opinion,
    categoryID: id,
  });
  res.status(201).json(commentItem);
};

// Opinion.create({
//     fullName:"aşıcı",
//     opinion:"aşı yapıyoruz",
// categoryID: "62ce72d5dc0a9ebc017da311"
// })

//////

const Development = require("../models/dbModelDevelopment");

exports.getNewsHandler = async (req, res) => {
  const developmentItem = await Development.find();
  res.status(200).json(developmentItem);
};

// Development.create({
//   title: "covid",
// content: "rising"
// })

// get one news

exports.getNewsItemHandler = async (req, res) => {
  const { id } = req.params;

  const newsItem = await Development.findById(id);
  res.status(200).json(newsItem);
};

// get one opinion

exports.getOpinionItemHandler = async (req, res) => {
  const id = req.params.id;
  // console.log("req.params.id", id);

  const opinionItem = await Opinion.findById(id);
  res.status(200).json(opinionItem);
};

exports.getOpinionsByNewId = async (req, res) => {
  const id = req.params.id;
  // console.log("req.params.id", id);

  const opinionItem = await Opinion.find({
    categoryID: id,
  });
  res.status(200).json(opinionItem);
};
