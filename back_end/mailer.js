const nodemailer = require("nodemailer");
const { verificationTemplate } = require("./utilities/emailHTMLTemplate");

const sendVerificationEmail = async ({ toUser, hash }) => {
    return new Promise((res, rej) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GOOGLE_USER,
                pass: process.env.GOOGLE_PASS,
            },
        });

        const message = {
            from: process.env.GOOGLE_USER,
            to: toUser,
            subject: "Verify Your Email for Alumni Registration",
            html: verificationTemplate(hash),
        };

        transporter.sendMail(message, function (err, info) {
            if (err) {
                rej(err);
            } else {
                res(info);
            }
        });
    });
};

module.exports = { sendVerificationEmail };
