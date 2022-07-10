const Opinion = require("../models/dbmodels");

exports.getOpinionsHandler = async (req, res) => {
  const opininonItem = await Opinion.find();
  res.status(200).json(opininonItem);
  console.log("ops", opininonItem);
};
/////

exports.createOpinionHandler = async (req, res) => {
//   const { fullName, opinion } = req.body;

  const commentItem = await Opinion.create({
    fullName,
    opinion,
  });
};



// Opinion.create({
//     fullName:"gökay",
//     opinion:"çok iyi"
// })

//////

const Development = require("../models/dbmodels");

exports.getNewsHandler = async (req, res) => {
  const developmentItem = await Development.find();
  res.status(200).json(developmentItem);
};
