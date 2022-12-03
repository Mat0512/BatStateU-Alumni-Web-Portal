const nodemailer = require("nodemailer");
const { verificationTemplate } = require("./utilities/emailHTMLTemplate");
const { postsEmailTemplate } = require("./utilities/postsEmailTemplate");

const sendVerificationEmail = async ({
    multipleUsers,
    announcementTitle,
    surveyTitle,
    toUser,
    glink,
    hash,
}) => {
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
            to: multipleUsers || toUser,
            subject: announcementTitle
                ? "BatState-U Alumni Announcement"
                : surveyTitle
                ? "BatState-U Alumni Survey"
                : "Verify Your Email for Alumni Registration",
            html: multipleUsers
                ? postsEmailTemplate(
                      announcementTitle
                          ? { announcementTitle: announcementTitle }
                          : { surveyTitle: surveyTitle, glink: glink }
                  )
                : verificationTemplate(hash),
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
