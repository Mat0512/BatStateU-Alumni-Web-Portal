import { Table } from "../table/Table";
import { Row } from "../table/Row";
import { Columns } from "../table/Columns";
import { Button } from "../table/Button";

const dummy = [
    {
        srCode: "19-01100",
        name: "name name",
        program: "Information Technology",
        major: "major ",
        batch: "2022",
    },
    {
        srCode: "19-00011",
        name: "name name",
        program: "Computer Science",
        major: "major ",
        batch: "2022",
    },
    {
        srCode: "19-01100",
        name: "name name",
        program: "Electrical Engineering",
        major: "major ",
        batch: "2014",
    },
    {
        srCode: "19-1200",
        name: "name name",
        program: "Computer Engineering",
        major: "major ",
        batch: "2011",
    },
    {
        srCode: "19-00200",
        name: "name name",
        program: "Information Technology",
        major: "major ",
        batch: "2015",
    },
    {
        srCode: "19-40000",
        name: "name name",
        program: "Computer Science",
        major: "major ",
        batch: "2021",
    },
    {
        srCode: "19-03000",
        name: "name name",
        program: "Information Technology",
        major: "major ",
        batch: "2011",
    },
    {
        srCode: "19-09000",
        name: "name name",
        program: "Information Technology",
        major: "major ",
        batch: "2001",
    },
];

const AlumniRecordsTable = () => {
    const columns = [
        "SR-Code",
        "Student Name",
        "Program",
        "Major",
        "Batch",
        "",
    ];

    const replacer = <div>HELLO!</div>;

    const downloadPdfColumn = (
        <div className="flex gap-2 items-center">
            <Button
                color="blue"
                label="Download PDF"
                handleClick={(e) => {
                    console.log(e.target);
                }}
                contentSize
            />
        </div>
    );

    return (
        <Table name="Alumni Records">
            <Columns columns={columns} />
            <Row data={dummy} actionColumn={downloadPdfColumn} />
        </Table>
    );
};

export { AlumniRecordsTable };
