const express = require("express");
const router = express.Router();

const newsControllers = require("../controllers/newsControllers");

router.get("/news", newsControllers.getNewsHandler);
router.get("/opinions", newsControllers.getOpinionsHandler);
router.post("/opinions", newsControllers.createOpinionHandler);

module.exports = router;
