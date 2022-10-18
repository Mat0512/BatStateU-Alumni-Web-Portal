const Survey = require("../models/Survey");
const asyncHandler = require("express-async-handler");

const handleGetAllSurvey = asyncHandler(async (req, res) => {
    const surveys = await Survey.find();
    res.status(200).json(surveys);
});

const handleGetSurvey = asyncHandler(async (req, res) => {
    if (!req.params.id) {
        res.status(400);
    }

    const survey = await Survey.findOne({ __id: req.params.id });
    if (!survey) {
        res.status(404);
    }

    res.status(200).json(survey);
});

const handlePostSurvey = asyncHandler((req, res) => {
    if (
        !(
            req.body.title &&
            req.body.url &&
            req.body.description &&
            req.body.description
        )
    ) {
        res.status(400);
    }

    const survey = Survey.createAndRecordOnLog({
        ...req.body,
        author: req.user,
    });

    if (!survey) {
        res.sendStatus(400);
    }

    res.status(200).json(announcement);
});

const handleEditSurvey = asyncHandler((req, res) => {
    if (!req.params.id) {
        res.status(400);
    }

    const survey = Survey.updateAndRecordOnLog({
        ...req.body,
        author: req.user,
    });

    if (!survey) {
        res.sendStatus(400);
    }

    res.status(200).json(announcement);
});
