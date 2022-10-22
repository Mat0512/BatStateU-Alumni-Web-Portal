import { Table } from "../table/Table";
import { Row } from "../table/Row";
import { Columns } from "../table/Columns";
import { ButtonTableColumn } from "./ButtonTableColumn";

const dummy = [
    {
        title: "Dummy Title 1",
        link: "",
        description: "",
        postedBy: "Mathew Mendoza",
    },
    {
        title: "Dummy Title 2",
        link: "",
        description: "",
        postedBy: "Allysa Kate Maranan",
    },
    {
        title: "Dummy Title 3",
        link: "",
        description: "",
        postedBy: "Joseph Daniel Lansang",
    },
    {
        title: "Dummy Title 4",
        link: "",
        description: "",
        postedBy: "Mathew Mendoza",
    },
    {
        title: "Dummy Title 5",
        link: "",
        description: "",
        postedBy: "Mathew Mendoza",
    },
    {
        title: "Dummy Title 6",
        link: "",
        description: "",
        postedBy: "Mathew Mendoza",
    },
];

const SurveyPostsTable = ({
    setDisplayModalEditSurvey,
    setDisplayModalDeleteNotice,
}) => {
    const cols = ["Title", "Posted By", "Timestamp", ""];
    const selectedKeys = ["title", "postedBy", "createdAt", ""];

    return (
        <Table name="Posted Survey">
            <Columns columns={cols} />
            <Row
                data={dummy}
                selectedKeys={selectedKeys}
                actionColumn={
                    <ButtonTableColumn
                        setDisplayModalEdit={setDisplayModalEditSurvey}
                        setDisplayModalDeleteNotice={
                            setDisplayModalDeleteNotice
                        }
                    />
                }
            />
        </Table>
    );
};

export { SurveyPostsTable };
