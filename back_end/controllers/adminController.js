const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const asyncHandler = require("express-async-handler");
const controllersUtilities = require("../utilities/controllersUtilities");

const createAdmin = asyncHandler(async (req, res) => {
    const requiredKeys = [
        "firstName",
        "lastName",
        "username",
        "password",
        "avatar",
        "role",
        "phone",
        "cellphone",
        "houseNumber",
        "building",
        "street",
        "city",
        "province",
        "country",
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
    const foundUser = await Admin.findOne({ username: req.body.username });
    if (foundUser) {
        res.status(409);
        throw new Error(`Username ${req.body.username} is taken.`);
    }
    console.log(foundUser);

    const newAdmin = {
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        },
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
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
    };

    const hashedPass = await bcrypt.hash(req.body.password, saltRounds);

    newAdmin.password = hashedPass;

    const alumni = await Admin.create(newAdmin);
    console.log("alumni: ", alumni);

    res.status(200).json({ message: "account created" });
});

const authenticateAdmin = asyncHandler(async (req, res) => {
    const requiredKeys = ["username", "password"];
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
    const foundUser = await Admin.findOne({ username: req.body.username });

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

module.exports = { authenticateAdmin, createAdmin };
