const AlumniDummy = require("../models/AlumniDumy");

const handleVerifyAlumni = async (req, res) => {
    const requiredKeys = [
        "firstName",
        "middleName",
        "lastName",
        "phone",
        "telephone",
        "email",
        "address",
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

    const usedAccountAlumni = await AlumniDummy.findOne({});
};
