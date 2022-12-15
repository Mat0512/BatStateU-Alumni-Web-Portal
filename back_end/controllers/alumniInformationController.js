const AlumniInformation = require("../models/AlumniInformation.js");
const AlumniInformationDataset = require("../models/AlumniInformationDataset.js");
const { buildAlumniInformationPDF } = require("./service/pdfService");
const asyncHandler = require("express-async-handler");
const controllersUtilities = require("../utilities/controllersUtilities");
const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs-extra");
const hbs = require("handlebars");

// AlumniInforationDataset is dummy data, used only for demo on app and only read operation
// AlumniInforation is production data model

//read
const handleGetAlumniInformationDataset = asyncHandler(async (req, res) => {
    const pageSize = 15;
    const page = parseInt(req.query.page || "0");
    const total = await AlumniInformationDataset.countDocuments({});

    console.log("query: ", req.query);

    const alumniInformations = req.query.srCode
        ? await AlumniInformationDataset.find({
              "Sr-code": { $regex: req.query.srCode, $options: "i" },
          })
        : await AlumniInformationDataset.find(req.query)
              .sort("-created_at")
              .limit(pageSize)
              .skip(page * pageSize);

    res.status(200).json({
        ...(!req.query.srCode && { totalPages: Math.ceil(total / pageSize) }),
        data: alumniInformations,
    });
});

const handleGetOneAlumniInformationDataset = asyncHandler(async (req, res) => {
    if (!req.params.id) {
        res.status(400);
        throw new Error("No User ID");
    }

    const alumniInformation = await AlumniInformationDataset.findById(
        req.params.id
    ).exec();
    if (!alumniInformation) {
        res.status(404).json({ message: "Not Found" });
        return;
    }

    res.status(200).json(alumniInformation);
});

const handleGetAlumniInformation = asyncHandler(async (req, res) => {
    const pageSize = 15;
    const page = parseInt(req.query.page || "0");
    const total = await AlumniInformation.countDocuments({});
    const alumniInformations = await AlumniInformation.find({})
        .sort("-created_at")
        .limit(pageSize)
        .skip(page * pageSize);

    res.status(200).json({
        totalPages: Math.ceil(total / pageSize),
        data: alumniInformations,
    });
});

const handleGetOneAlumniInformation = asyncHandler(async (req, res) => {
    if (!req.params.id) {
        res.status(400);
        throw new Error("No User ID");
    }

    const alumniInformation = await AlumniInformation.findOne({
        respondent: req.params.id,
    }).exec();
    if (!alumniInformation) {
        res.status(200).json({ message: "Not Found" });
        return;
    }

    res.status(200).json(alumniInformation);
});

//create
const handleCreateAlumniInformation = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.sendStatus(400).json({ message: "Required data are missing" });
    }

    const existingAlumniInfo = await AlumniInformation.findOne({
        respondent: req.body.respondent,
    });

    if (existingAlumniInfo) {
        const filteredUpdateObj = controllersUtilities.removeEmptyProp({
            ...req.body,
        });

        const formattedUpdateQuery =
            controllersUtilities.formatUpdateData(filteredUpdateObj);

        console.log("formatted: ");
        console.log(formattedUpdateQuery);

        const updatedAlumniInfo = await AlumniInformation.findOneAndUpdate(
            {
                respondent: req.body.respondent,
            },
            formattedUpdateQuery,
            {
                new: true,
            }
        );

        console.log("updated: ");
        console.log(updatedAlumniInfo);

        if (!updatedAlumniInfo) {
            res.status(400).json({
                message: "Update Failed",
            });
            return;
        }

        res.sendStatus(200);
        return;
    }

    const newAlumniInfo = await AlumniInformation.create({ ...req.body });
    if (!newAlumniInfo) {
        res.status(400).send("Creating alumni information failed");
        return;
    }
    res.status(201).json({
        message: "Created",
    });
});

//update
const handleUpdateAlumniInformation = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.send(400).json({ message: "Required data are missing" });
        return;
    }

    const foundAlumniInformation = await AlumniInformation.findOne({
        respondent: req.body.username,
    });
    if (!foundAlumniInformation) {
        res.status(404).json({ message: "No existing record to update." });
        return;
    }

    const filteredUpdateObj = controllersUtilities.removeEmptyProp({
        ...req.body,
    });

    const formattedUpdateQuery =
        controllersUtilities.formatUpdateData(filteredUpdateObj);

    const updatedAlumniInformation = await AlumniInformation.findOneAndUpdate(
        { respondent: req.body.username },
        formattedUpdateQuery,
        {
            new: true,
        }
    );

    if (!updatedAlumniInformation) {
        res.status(400).json({
            message: "Update Failed",
        });
        return;
    }

    res.sendStatus(200);
});

const handleGenerateAlumniInfoPdf = asyncHandler(async (req, res) => {
    if (!req.params.id) {
        res.sendStatus(400);
        return;
    }
    console.log("alumni username: ", req.params.id);
    const foundAlumni = await AlumniInformation.findById({
        _id: req.params.id,
    }).lean();
    if (!foundAlumni) {
        res.status(404).json({ message: "Alumni record not found" });
        return;
    }

    console.log("found alumni: ", foundAlumni);
    const compile = async function (templateName, data) {
        const filePath = path.join(__dirname, "service", `${templateName}.hbs`);

        const html = await fs.readFile(filePath, "utf8");
        return hbs.compile(html)(data);
    };

    res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment;filename=alumni-info.pdf",
    });

    const content = await compile("alumni-info-template", foundAlumni);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(content);
    const buffer = await page.pdf({ format: "A4", margin: { top: 60 } });
    await browser.close();

    res.end(buffer);
});

module.exports = {
    handleCreateAlumniInformation,
    handleGetAlumniInformation,
    handleGetAlumniInformationDataset,
    handleGetOneAlumniInformation,
    handleGetOneAlumniInformationDataset,
    handleUpdateAlumniInformation,
    handleGenerateAlumniInfoPdf,
};
