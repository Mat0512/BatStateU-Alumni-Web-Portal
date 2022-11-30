// const aws = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");
// const { v4: uuidv4 } = require("uuid");

// //aws spaces digitalocean
// const spacesEndpoint = new aws.Endpoint(process.env.DO_SPACE_ENDPOINT);
// console.log("space endpoint: ", spacesEndpoint);
// const s3 = new aws.S3({
//     endpoint: spacesEndpoint,
//     region: "sgp1",
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     },
// });

// // Change bucket property to your Space name
// const upload = multer({
//     storage: multerS3({
//         s3,
//         bucket: "statics-storage",
//         acl: "public-read",
//         key: function (req, file, cb) {
//             console.log("file ", file);
//             cb(
//                 null,
//                 // unique filename
//                 // uuidv4() + "-" + Date.now() + path.extname(file.originalname)
//                 file.originalname
//             );
//         },
//     }),
// }).single("upload");

// module.exports = { upload, s3 };
