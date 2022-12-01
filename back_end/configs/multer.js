const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { v4: uuidv4 } = require("uuid");

console.log(
    "environment variables space endpoint: ",
    process.env.DO_SPACE_ENDPOINT
);
console.log("environment variables bucket: ", process.env.DO_SPACE_BUCKET);
console.log("environment variables id token: ", process.env.AWS_ACCESS_KEY_ID);
console.log(
    "environment variables key token: ",
    process.env.AWS_SECRET_ACCESS_KEY
);

const spacesEndpoint = new aws.Endpoint(process.env.DO_SPACE_ENDPOINT);
const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    region: "sgp1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

const upload = (name) =>
    multer({
        storage: multerS3({
            s3: s3,
            bucket: process.env.DO_SPACE_BUCKET,
            acl: "public-read",
            key: function (request, file, cb) {
                console.log("\n req ", request);
                console.log("\n file ", file);
                cb(null, uuidv4() + "-" + Date.now() + "-" + file.originalname);
            },
        }),
    }).single(name);

module.exports = { upload, s3 };
