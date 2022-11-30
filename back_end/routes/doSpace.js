// const express = require("express");
// const router = express.Router();
// const aws = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");

// console.log(
//     "environment variables space endpoint: ",
//     process.env.DO_SPACE_ENDPOINT
// );
// console.log("environment variables bucket: ", process.env.DO_SPACE_BUCKET);
// console.log("environment variables id token: ", process.env.AWS_ACCESS_KEY_ID);
// console.log(
//     "environment variables key token: ",
//     process.env.AWS_SECRET_ACCESS_KEY
// );

// //aws spaces digitalocean
// const spacesEndpoint = new aws.Endpoint(process.env.DO_SPACE_ENDPOINT);
// const s3 = new aws.S3({
//     endpoint: spacesEndpoint,
//     region: "sgp1",
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     },
// });

// // Change bucket property to your Space name

// //specify error

// const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: process.env.DO_SPACE_BUCKET,
//         acl: "public-read",
//         key: function (request, file, cb) {
//             console.log("\n req ", request);
//             console.log("\n file ", file);
//             cb(null, file.originalname);
//         },
//     }),
// }).single("upload");

// router.post("/", upload, (req, res) => {
//     console.log("req: ", req.body);
//     console.log("req file from test DO-space: ", req.file);

//     console.log("called");
//     res.status(200).send("success");
// });

// router.get("/files", (req, res) => {});

// module.exports = router;
