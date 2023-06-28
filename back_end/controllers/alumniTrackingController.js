const AlumniTracking = require("../models/AlumniTracking.js");
const asyncHandler = require("express-async-handler");
const controllersUtilities = require("../utilities/controllersUtilities");

// only retrieves one, per user account
const hanldeGetAlumniTracking = asyncHandler(async (req, res) => {
    if (!req.params.id) {
        res.status(400);
        throw new Error("Missing ID");
    }

    const alumniTracking = await AlumniTracking.findById(req.params.id);
    if (!alumniTracking) {
        res.status(404).json({ message: "Not Found" });
        return;
    }

    res.status(200).json(alumniTracking);
});

const hanldeAddAlumniTracking = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400).json({ message: "Required data are missing" });
    }

    const existingAlumnTracking = await AlumniTracking.findOne({
        respondent: req.body.respondent,
    });

    if (existingAlumnTracking) {
        const filteredUpdateObj = controllersUtilities.removeEmptyProp({
            ...req.body,
        });

        const formattedUpdateQuery =
            controllersUtilities.formatUpdateData(filteredUpdateObj);

        console.log("formatted: ");
        console.log(formattedUpdateQuery);

        const updatedAlumniTracking = await AlumniTracking.findOneAndUpdate(
            {
                respondent: req.body.respondent,
            },
            formattedUpdateQuery,
            {
                new: true,
            }
        );

        console.log("updated: ");
        console.log(updatedAlumniTracking);

        if (!updatedAlumniTracking) {
            res.status(400).json({
                message: "Update Failed",
            });
            return;
        }

        res.sendStatus(200);
        return;
    }

    const newAlumniTracking = await AlumniTracking.create({ ...req.body });
    if (!newAlumniTracking) {
        res.status(400).send("Creating alumni information failed");
        return;
    }
    res.status(201).json({
        message: "Created",
    });
});

module.exports = { hanldeGetAlumniTracking, hanldeAddAlumniTracking };
