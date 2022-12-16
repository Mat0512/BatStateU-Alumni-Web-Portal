import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useEffect, useState, useRef } from "react";
import { client } from "./api/api";
import { useParams } from "react-router";
import ReactToPrint from "react-to-print";

const AlumniInfoPDF = ({ data, refProp }) => {
    const tableHeaderStyle = "bg-zinc-200";
    const borderCellStyle = "border border-grey-200 p-2";

    document.body.style.zoom = "80%";

    return (
        <div
            ref={refProp}
            id="pdf"
            className="bg-white w-[75rem] h-[100rem] flex flex-col p-10 items-between gap-4"
        >
            <p className="text-4xl">Alumni Personal Data Form</p>
            <p className="text-3xl">Personal Information</p>
            <table className="table-auto text-xl">
                <tbody>
                    <tr>
                        <td className={borderCellStyle}>
                            Last Name: {data.lastName}
                        </td>
                        <td className={borderCellStyle}>
                            First Name: {data.firstName}
                        </td>
                        <td className={borderCellStyle}>
                            Middle Name: {data.middleName}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className={borderCellStyle}>
                            Email: {data.email}
                        </td>
                        <td className={borderCellStyle}>
                            Phone: {data.contactNumber}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className={borderCellStyle}>
                            Address: {data.address}
                        </td>
                        <td className={borderCellStyle}>Zip Code: </td>
                    </tr>
                    <tr>
                        <td className={borderCellStyle}>Place of Birth: </td>
                        <td className={borderCellStyle}>
                            Gender: {data.gender}
                        </td>
                        <td className={borderCellStyle}>
                            Civil Status: {data.civilStatus}
                        </td>
                    </tr>
                </tbody>
            </table>

            <p className="text-2xl">Educational Background</p>
            <table className="table-auto text-xl">
                <thead className={tableHeaderStyle}>
                    <tr>
                        <th className={borderCellStyle}>Education Level</th>
                        <th className={borderCellStyle}>Major Field</th>
                        <th className={borderCellStyle}>
                            Learning Institution
                        </th>
                        <th className={borderCellStyle}>Year Graduated</th>
                        <th className={borderCellStyle}>Honors/Awards</th>
                    </tr>
                </thead>
                <tbody>
                    {data.educationalBackground.map((field, i) => (
                        <tr key={i}>
                            <td className={borderCellStyle}>
                                {field.educationalLevel}
                            </td>
                            <td className={borderCellStyle}>{field.major}</td>
                            <td className={borderCellStyle}>
                                {field.schoolName}
                            </td>
                            <td className={borderCellStyle}>
                                {field.yearGraduated}
                            </td>
                            <td className={borderCellStyle}>{field.honors}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p className="text-2xl">Family Background</p>
            <table className="table-auto text-xl">
                <tr>
                    <td className={borderCellStyle}>
                        Mother's Last Name: {data.lastNameMother}
                    </td>
                    <td className={borderCellStyle}>
                        Mother's First Name: {data.firstNameMother}
                    </td>
                    <td className={borderCellStyle}>
                        Mother's Middle Name: {data.middleNameMother}
                    </td>
                </tr>
                <tr>
                    <td className={borderCellStyle}>
                        Father's Last Name: {data.lastNameFather}
                    </td>
                    <td className={borderCellStyle}>
                        Father's First Name: {data.firstNameFather}
                    </td>
                    <td className={borderCellStyle}>
                        Father's Middle Name: {data.middleNameFather}
                    </td>
                </tr>
            </table>

            <p className="text-2xl">Training Programs</p>
            <table className="table-auto text-xl">
                <thead className={tableHeaderStyle}>
                    <tr>
                        <th className={borderCellStyle}>Title</th>
                        <th className={borderCellStyle}>
                            Date of Attendance/Completion
                        </th>
                        <th className={borderCellStyle}>
                            Conducted/Sponsored by
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.trainingPrograms.map((fields, i) => (
                        <tr key={i}>
                            <td className={borderCellStyle}>{fields.title}</td>
                            <td className={borderCellStyle}>{fields.date}</td>
                            <td className={borderCellStyle}>
                                {fields.organizer}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-2xl">Other Information</p>
            <div className="flex">
                <table className="w-full text-xl">
                    <thead className={tableHeaderStyle}>
                        <tr>
                            <th className={borderCellStyle}>
                                Special Skills/Hobbies
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.skills.length ? (
                            data.skills.map((skill, i) => (
                                <tr key={i}>
                                    <td className={borderCellStyle}>{skill}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className={borderCellStyle}></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <table className="w-full text-xl">
                    <thead className={tableHeaderStyle}>
                        <tr>
                            <th className={borderCellStyle}>
                                Membership in Association/Organization
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.organizations.length ? (
                            data.organizations.map((org, i) => (
                                <tr key={i}>
                                    <td className={borderCellStyle}>{org}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className={borderCellStyle}></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const Pdf = () => {
    const params = useParams();
    const [data, setData] = useState(null);
    const printRef = useRef();

    useEffect(() => {
        const getAlumniInfo = async () => {
            try {
                const res = await client.get(`alumni-records/${params.id}`);
                setData(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err.message);
                alert(err);
            }
        };

        getAlumniInfo();
    }, []);

    const exportPdf = () => {
        const input = document.getElementById("pdf");

        html2canvas(input, {
            logging: true,
            letterRendering: 1,
            useCORS: true,
            scale: "2",
        }).then((canvas) => {
            const imgData = canvas.toDataURL("image/jpeg", 1.0);
            const doc = new jsPDF("p", "mm", "a4");

            let width = doc.internal.pageSize.getWidth();
            let height = doc.internal.pageSize.getHeight();

            let widthRatio = width / canvas.width;
            let heightRatio = height / canvas.height;

            let ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
            console.log("ratio: ", ratio);

            doc.addImage(
                canvas.toDataURL("image/jpeg", 1.0),
                "JPEG",
                0,
                0,
                canvas.width * ratio,
                canvas.height * ratio
            );
            doc.save("download.pdf");
        });
    };

    return (
        <>
            {data ? (
                <div className="flex w-full bg-zinc-200 justify-center flex flex-col justify-center items-center py-2 font-poppins">
                    <div className="flex gap-1">
                        <button
                            onClick={exportPdf}
                            className="my-3 bg-blue px-3 py-2 border border-blue hover:bg-white hover:text-blue text-white w-fit rounded"
                        >
                            Download PDF
                        </button>

                        <ReactToPrint
                            trigger={() => (
                                <button className="my-3 bg-blue px-3 py-2 border border-blue hover:bg-white hover:text-blue text-white w-fit rounded">
                                    Print PDF
                                </button>
                            )}
                            content={() => printRef.current}
                        />
                    </div>
                    <AlumniInfoPDF data={data} refProp={printRef} />
                </div>
            ) : (
                "loading..."
            )}
        </>
    );
};

export { Pdf };
