const express = require("express");
const router = express.Router();

const newsControllers = require("../controllers/newsControllers");

router.get("/news", newsControllers.getNewsHandler);
router.get("/news/:id", newsControllers.getNewsItemHandler);
router.get("/opinions/:id", newsControllers.getOpinionItemHandler);
router.get("/opinions", newsControllers.getOpinionsHandler);
router.post("/opinions/:id", newsControllers.createOpinionHandler);

module.exports = router;
