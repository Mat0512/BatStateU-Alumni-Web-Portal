const AlumniInformation = require("../models/AlumniInformation.js");
const AlumniInformationDataset = require("../models/AlumniInformationDataset.js");

// AlumniInforationDataset is dummy data, used only for demo on app and only read operation
// AlumniInforation is production data model

//read
const handleGetAlumniInformationDataset = async (req, res) => {
    const pageSize = 15;
    const page = parseInt(req.query.page || "0");
    const total = await AlumniInformationDataset.countDocuments({});

    const alumniInformations = await AlumniInformationDataset.find({})
        .limit(pageSize)
        .skip(page * pageSize);

    res.status(200).json({
        totalPages: Math.ceil(total / pageSize),
        data: alumniInformations,
    });
};

const handleGetOneAlumniInformationDataset = async (req, res) => {
    if (!req.params.id) {
        res.status(400);
        throw new Error("No User ID");
    }

    const alumniInformation = await AlumniInformationDataset.findById(
        req.params.id
    ).exec();
    if (!alumniInformation) {
        res.status(404).json({ message: "Not Found" });
    }

    res.status(200).json(alumniInformation);
};

const handleGetAlumniInformation = async (req, res) => {
    const pageSize = 15;
    const page = parseInt(req.query.page || "0");
    const total = await AlumniInformation.countDocuments({});
    const alumniInformations = await AlumniInformation.find({})
        .limit(pageSize)
        .skip(page * pageSize);

    res.status(200).json({
        totalPages: Math.ceil(total / pageSize),
        data: alumniInformations,
    });
};

const handleGetOneAlumniInformation = async (req, res) => {
    if (!req.params.id) {
        res.status(400);
        throw new Error("No User ID");
    }

    const alumniInformation = await AlumniInformation.findById(
        req.params.id
    ).exec();
    if (!alumniInformation) {
        res.status(200).json({ message: "Not Found" });
    }

    res.status(200).json(alumniInformation);
};

//create
const handleCreateAlumniInformation = async (req, res) => {
    if (!req.body) {
        res.sendStatus(400).json({ message: "Required data are missing" });
    }
    const newAlumniInfo = await AlumniInformation.create(req.body);
    if (!newAlumniInfo) {
        res.status(400).send("Creating alumni information failed");
    }

    res.status(201);
};
//update
const handleUpdateAlumniInformation = async (req, res) => {
    if (!req.body) {
        res.send(400).json({ message: "Required data are missing" });
    }

    const updatedAlumniInfo = await AlumniInformation.find;
};

module.exports = {
    handleCreateAlumniInformation,
    handleGetAlumniInformation,
    handleGetAlumniInformationDataset,
    handleGetOneAlumniInformation,
    handleGetOneAlumniInformationDataset,
    handleUpdateAlumniInformation,
};
