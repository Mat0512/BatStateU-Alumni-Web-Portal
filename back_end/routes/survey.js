const express = require("express");
const router = express.Router();
const surveyController = require("../controllers/surveyController");

router.get("/", surveyController.handleGetAllSurvey);
router.get("/:id", surveyController.handleGetSurvey);
router.post("/post", surveyController.handlePostSurvey);
router.post("/update/:id", surveyController.handleEditSurvey);
router.delete("/delete/:id", surveyController.handleDeleteSurvey);

module.exports = router;
