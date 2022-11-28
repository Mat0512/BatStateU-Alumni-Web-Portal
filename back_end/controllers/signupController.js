const AlumniDummy = require("../models/AlumniDumy");
const Alumni = require("../models/Alumni");
const controllersUtilities = require("../utilities/controllersUtilities");
const { sendVerificationEmail } = require("../mailer.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const handleAlumniVerification = async (req, res) => {
    console.log("body: ", req.body);
    const requiredKeys = [
        "firstName",
        "middleName",
        "lastName",
        "phone",
        "email",
        "address",
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

    const query = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        program: req.body.program,
        srCode: req.body.srCode,
        batch: req.body.batch,
    };
    console.log("query: ", query);

    //check if alumni information are recorded on alumni graduates
    const verifiedAlumni = await AlumniDummy.findOne(query).exec();
    console.log("verifiedAlumni: ", verifiedAlumni);

    if (!verifiedAlumni) {
        res.status(401).send({
            message:
                "Not verified alumni. Please ensure the information are correct.",
        });
        return;
    }

    //check if the alumni have registered and did not verify the email verification before
    //resend a new verification email to continue registration

    const alumniQuery = controllersUtilities.parseToNestedFieldQuery({
        name: {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
        },
        alumniBackground: {
            program: req.body.program,
            batch: req.body.batch,
            srCode: req.body.srCode,
        },
    });

    const unverifiedAccount = await Alumni.findOne(alumniQuery).exec();
    console.log("query: ", alumniQuery);
    // verified: false,

    console.log("unverified Acc: ", unverifiedAccount);
    if (unverifiedAccount) {
        await sendVerificationEmail({
            toUser: unverifiedAccount.contact.email,
            hash: unverifiedAccount._id,
        });
        res.status(201).json({ email: unverifiedAccount.contact.email });
        return;
    }

    //if verified and doesn't have existing unverified account, create alumni record/account with unverified status

    // verifying account will be handled on different controller(handleVerifiedAlumni)

    const newUnverifiedAlumni = await Alumni.create({
        name: {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
        },

        verified: false,
        contact: {
            phone: req.body.phone,
            cellphone: req.body.cellphone,
            email: req.body.email,
        },
        address: req.body.address,

        alumniBackground: {
            srCode: req.body.srCode,
            program: req.body.program,
            batch: req.body.batch,
            studentEmail: req.body.studentEmail,
        },
    });

    //send email
    await sendVerificationEmail({
        toUser: newUnverifiedAlumni.contact.email,
        hash: newUnverifiedAlumni._id,
    });
    console.log("email sent");
    res.status(201).send({ email: newUnverifiedAlumni.contact.email });
};

const handleVerifiedAlumni = async (req, res) => {
    console.log("params: ", req.params);
    console.log("body: ", req.body);

    const alumniId = req.params.id;
    const updateObj = controllersUtilities.parseToNestedFieldQuery(req.body);
    updateObj.verified = true;
    updateObj.password = await bcrypt.hash(updateObj.password, saltRounds);

    const foundAlumni = await Alumni.findOneAndUpdate(
        { _id: alumniId, verified: false },
        updateObj,
        { new: true }
    ).exec();

    if (!foundAlumni) {
        res.status(401).send({
            message: "Unauthorized Alumni",
        });
        return;
    }

    res.status(200).send({
        message: "Sucessfully Registered",
    });
};

module.exports = { handleVerifiedAlumni, handleAlumniVerification };
