const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl. Suspendisse rhoncus nisl posuere tortor tempus et dapibus elit porta. Cras leo neque, elementum a rhoncus ut, vestibulum non nibh. Phasellus pretium justo turpis. Etiam vulputate, odio vitae tincidunt ultricies, eros odio dapibus nisi, ut tincidunt lacus arcu eu elit. Aenean velit erat, vehicula eget lacinia ut, dignissim non tellus. Aliquam nec lacus mi, sed vestibulum nunc. Suspendisse potenti. Curabitur vitae sem turpis. Vestibulum sed neque eget dolor dapibus porttitor at sit amet sem. Fusce a turpis lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;";

const userData = `  `;

const buildAlumniInformationPDF = (alumniData, dataCallback, endCallback) => {
    console.log("alumni Data: ", alumniData);
    const doc = new PDFDocument();
    doc.on("data", dataCallback);
    doc.on("end", endCallback);
    doc.on("error", () => console.log(err));
    doc.fontSize(18).text("Personal Information \n");
    doc.fontSize(12).text(lorem, {
        columns: 3,
        columnGap: 15,
        height: 100,
        width: 465,
        align: "justify",
    });

    doc.initForm();

    // structure
    doc.end();
};

module.exports = { buildAlumniInformationPDF };
