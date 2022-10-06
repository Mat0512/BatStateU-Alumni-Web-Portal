const asyncHandler = require("express-async-handler");
const Alumni = require("../models/Alumni");
const Admin = require("../models/Admin");
require("dotenv").config();

const handleAdminLogout = asyncHandler(async (req, res) => {
    console.log("\n \n Handle logout admin logs");

    const cookies = req.cookies;
    if (!cookies) {
        res.sendStatus(204);
    }

    console.log("JWT: ", cookies.jwt);

    const foundUser = await Admin.findOne({
        refreshToken: cookies.jwt,
    }).exec();

    console.log("found user: ", foundUser);

    if (!foundUser) {
        res.clearCookie("jwt");
        res.sendStatus(204);
    }

    foundUser.refreshToken = "";
    console.log("refresh token prop", foundUser.refreshToken);

    const result = await foundUser.save();
    console.log("logout result: ", result);
    res.sendStatus(200);
});

const handleAlumniLogout = asyncHandler(async (req, res) => {
    console.log("\n \n Handle logout alumni logs");

    const cookies = req.cookies;
    if (!cookies) {
        res.sendStatus(204);
    }

    console.log("cookies: ", cookies);

    const foundUser = await Alumni.findOne({
        refreshToken: cookies.jwt,
    }).exec();

    console.log("found user: ", foundUser);
    if (!foundUser) {
        res.clearCookie("jwt");
        res.sendStatus(204);
    }

    console.log("refresh token prop", foundUser);

    foundUser.refreshToken = "";
    const result = await foundUser.save();
    console.log("logout result: ", result);

    res.clearCookie("jwt");
    res.sendStatus(200);
});

module.exports = { handleAdminLogout, handleAlumniLogout };
