const bcrypt = require("bcrypt");
const Alumni = require("../models/Alumni");
const saltRounds = 10;
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const controllersUtilities = require("../utilities/controllersUtilities");
require("dotenv").config();

const createAlumni = asyncHandler(async (req, res) => {
    const requiredKeys = [
        "firstName",
        "lastName",
        "username",
        "password",
        "avatar",
        "phone",
        "cellphone",
        "email",
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
            email: req.body.email,
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

    const alumni = await Alumni.create(newAlumni);
    console.log("alumni: ", alumni);

    const token = jwt.sign(
        {
            username: newAlumni.username,
        },
        process.env.SECRET_KEY,
        {
            expiresIn: "6h",
        }
    );

    res.status(200).json({
        username: newAlumni.username,
        firstName: newAlumni.name.firstName,
        lastName: newAlumni.name.lastName,
        token: token,
        avatar: "",
    });
});

const authenticateAlumni = asyncHandler(async (req, res) => {
    console.log("authenticating alumni: ", req.body);

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

    console.log("username: ", req.body.username);
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
        res.status(401);
        throw new Error("Wrong Password");
    }

    //create access and refresh token
    //change duration of access in 30min in production
    const accessToken = jwt.sign(
        { username: foundUser.username },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "2h",
        }
    );

    const refreshToken = jwt.sign(
        { username: foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: "1d",
        }
    );

    //save refresh token in the databse for preventing refresh token reuse, a kind of exploiting resources with refresh token

    console.log("refresh token: ", refreshToken);
    console.log("refresh token prop: ", foundUser.refreshToken);

    foundUser.refreshToken = refreshToken;
    const updatedUser = await foundUser.save();

    if (!updatedUser) {
        throw new Error("mongoose did not update refresh token");
    }

    console.log("updated user ", updatedUser);

    res.cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
        user: foundUser.username,
        message: "user successfuly logged in",
        token: accessToken,
        //include avatar when image buffer are coded
    });
});

const editAlumni = asyncHandler(async (req, res) => {
    console.log("req body: ", req.body);
    const updateCopy = { ...req.body };
    const requiredKeys = ["avatar", "address", "phone", "cellphone", "email"];

    let missingProperty = controllersUtilities.findMissingProp(
        requiredKeys,
        req.body
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

    //formatting the objects for $set operator
    const formattedUpdateQuery =
        controllersUtilities.parseToNestedFieldQuery(filteredUpdateObj);

    console.log("formated!!!!!!: ", formattedUpdateQuery);
    console.log("user: ", req.user);

    // use set operator to update certain property only
    const foundUser = await Alumni.findOneAndUpdate(
        { username: req.user },
        formattedUpdateQuery,
        { new: true }
    ).exec();

    console.log(foundUser);

    if (!foundUser) {
        res.status(404);
        throw new Error("User not found and not updated");
    }

    res.status(200).json({
        message: "account Updated",
    });
});

const getAlumniUser = asyncHandler(async (req, res) => {
    const { username } = req.params;
    console.log("username: ", username);
    const user = await Alumni.findOne({ username: username }).exec();

    if (!user) {
        res.status(400);
        throw new Error("User not found.");
    }

    res.status(200).json({
        firstname: user.name.firstName,
        lastname: user.name.lastName,
        username: user.username,
        address: user.address,
        phone: user.contact.phone,
        cellphone: user.contact.cellphone,
        email: user.contact.email,
        batch: user.alumniBackground.batch,
        program: user.alumniBackground.program,
    });
});

const handleUsernames = async (req, res) => {
    console.log("params: ", req.params);
    const foundAlumni = await Alumni.findOne({ username: req.params.username });
    console.log("found", foundAlumni);
    let statusCode = foundAlumni ? 403 : 200;
    res.sendStatus(statusCode);
};

module.exports = {
    createAlumni,
    authenticateAlumni,
    editAlumni,
    getAlumniUser,
    handleUsernames,
};
