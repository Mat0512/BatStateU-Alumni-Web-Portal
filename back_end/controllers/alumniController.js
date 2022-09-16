const bcrypt = require("bcrypt");
const Alumni = require("../models/Alumni");
const saltRounds = 10;
const asyncHandler = require("express-async-handler");
const controllersUtilities = require("../utilities/controllersUtilities");

const createAlumni = asyncHandler(async (req, res) => {
    const requiredKeys = [
        "firstName",
        "lastName",
        "username",
        "password",
        "avatar",
        "phone",
        "cellphone",
        "houseNumber",
        "building",
        "street",
        "city",
        "province",
        "country",
        "fullName",
        "srCode",
        "program",
        "batch",
        "studentEmail",
    ];

    let missingProperty = controllersUtilities.findMissingProp(
        requiredKeys,
        req.body
    );

    // checks if all required data are included
    if (missingProperty.length !== 0) {
        res.status(400);
        throw new Error(
            `missing property for creating alumni: ${missingProperty}`
        );
    }

    //checks if username is taken
    const foundUser = await Alumni.findOne({
        username: req.body.username,
    }).exec();
    if (foundUser) {
        res.status(409);
        throw new Error(`Username ${req.body.username} is taken.`);
    }

    // const newAlumni = {
    //     ...req.body,
    // };

    const newAlumni = {
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        },
        username: req.body.username,
        password: req.body.password,
        contact: {
            phone: req.body.phone,
            cellphone: req.body.cellphone,
        },
        address: {
            houseNumber: req.body.houseNumber,
            building: req.body.building,
            street: req.body.street,
            city: req.body.city,
            province: req.body.province,
            country: req.body.country,
        },
        alumniBackground: {
            fullName: req.body.fullName,
            srCode: req.body.srCode,
            program: req.body.program,
            batch: req.body.batch,
            studentEmail: req.body.studentEmail,
        },
    };

    //hashing password before adding in database
    const hashedPass = await bcrypt.hash(req.body.password, saltRounds);
    newAlumni.password = hashedPass;

    const alumni = await Alumni.create(newAlumni).exec();
    console.log("alumni: ", alumni);

    res.status(200).json({ message: "account created" });
});

const authenticateAlumni = asyncHandler(async (req, res) => {
    const requiredKeys = ["username", "password"];
    console.log(controllersUtilities.findMissingProp);
    const missingProp = controllersUtilities.findMissingProp(
        requiredKeys,
        req.body
    );
    //check if username and password are in request body
    if (missingProp.length !== 0) {
        res.status(400);
        throw new Error(
            `${missingProp.includes("Username") ? username : ""} ${
                missingProp.includes("password") ? "and Password" : ""
            } ${missingProp.length > 1 ? "are" : "is"} required.`
        );
    }
    const foundUser = await Alumni.findOne({
        username: req.body.username,
    }).exec();

    //check if user exist
    if (!foundUser) {
        res.status(400);
        throw new Error("user does no exist");
    }

    //decrypting pass and comparing to password input
    const matchedPass = await bcrypt.compare(
        req.body.password,
        foundUser.password
    );

    if (!matchedPass) {
        res.status(400);
        throw new Error("Wrong Password");
    }

    res.status(200).json({
        username: foundUser.username,
        message: "user successfuly logged in",
        //include avatar when image buffer are coded
    });
});

const editAlumni = asyncHandler(async (req, res) => {
    const requiredKeys = [
        "alumniId",
        "houseNumber",
        "building",
        "street",
        "city",
        "province",
        "country",
        "phone",
        "cellphone",
    ];

    let missingProperty = controllersUtilities.findMissingProp(
        requiredKeys,
        req.body.props
    );

    // check if required properties are in request body
    if (missingProperty.length !== 0) {
        res.status(400);
        throw new Error(
            `Missing ${
                missingProperty.length > 1 ? "properties" : "property"
            }: ${missingProperty}`
        );
    }

    //filtering out the properties with null values
    // const updateData = { ...req.body };
    // requiredKeys.forEach((key) => {
    //     if (query[key] !== "") {
    //         delete query[key];
    //     }
    // });

    // const foundUser = await Alumni.findByIdAndUpdate({_id: alumniId}, updateData).exec()
    // if (!foundUser) {
    //     res.status(404);
    //     throw new Error("User not found and not updated");
    // }

    res.status(200).json({
        message: "account Updated",
    });
});

module.exports = {
    createAlumni,
    authenticateAlumni,
    editAlumni,
};
