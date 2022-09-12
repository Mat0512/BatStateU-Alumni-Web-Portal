const bcrypt = require("bcrypt");
const Alumni = require("../models/Alumni");
const saltRounds = 10;

const reqBodyValidator = (keyArray, requestBody, res) => {
    keyArray.forEach((key) => {
        if (!(key in requestBody)) {
            console.log("Incomplete keys");
            res.status(400).json({
                message: "Incomplete Inputs",
            });
        }
    });
};

const createAlumni = async (req, res, next) => {
    try {
        const newAlumni = {};
        const requiredKeys = [
            "firstName",
            "lastName",
            "username",
            "password",
            "avatar",
            "phone",
            "cellphone",
            "houseNumber",
            "houseName",
            "street",
            "city",
            "province",
            "country",
            "fullName",
            "srCode",
            "degree",
            "batch",
            "studentEmail",
        ];

        reqBodyValidator(requiredKeys, req.body);

        const foundUser = await Alumni.findOne(props.body.username);
        if (foundUser) {
            res.status(409).json({
                message: "username is taken",
            });
        }

        newAlumni.name.firstname = req.body.firstname;
        newAlumni.name.lastname = req.body.lastname;
        newAlumni.username = req.body.username;
        newAlumni.password = req.body.password;
        newAlumni.contact.phone = req.body.phone;
        newAlumni.contact.cellphone = req.body.cellphone;
        newAlumni.address.houseNumber = req.body.houseNumber;
        newAlumni.address.buildingName = req.body.buildingName;
        newAlumni.address.street = req.body.street;
        newAlumni.address.city = req.body.city;
        newAlumni.address.province = req.body.province;
        newAlumni.alumniBackground.fullname = req.bfullname;
        newAlumni.alumniBackground.srCode = req.body.srCode;
        newAlumni.alumniBackground.degree = req.body.degree;
        newAlumni.alumniBackground.batch = req.body.batch;
        newAlumni.alumniBackground.studentEmail = req.body.studentEmail;

        const hashedPass = bcrypt.hash(req.body.password, saltRounds);
        newAlumni.password = hashedPass;

        const alumni = await Alumni.create(req.body);
        console.log("created alumni", alumni);

        res.status(200).json({ message: "account created" });
    } catch (err) {
        next(err);
    }
};

const authenticateAlumni = async (req, res, next) => {
    try {
        const requiredKeys = [username, password];
        reqBodyValidator(requiredKeys, req.body);

        const foundUser = await Alumni.findOne({ username: req.body.username });

        if (!foundUser) {
            res.status(400).json({
                message: "user not found",
            });
        }

        const matchedPass = bcrypt.compare(
            req.body.password,
            matchedUser.password
        );
        if (!matchedPass) {
            res.status(400).json({
                message: "wrong password",
            });
        }

        res.status(200).json({
            username: foundUser.username,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createAlumni,
    authenticateAlumni,
};
