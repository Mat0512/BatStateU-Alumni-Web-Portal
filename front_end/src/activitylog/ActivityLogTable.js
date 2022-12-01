import { Table } from "../table/Table";
import { Row } from "../table/Row";
import { Columns } from "../table/Columns";

const ActivitylogTable = ({ data }) => {
    const columns = [
        "Date",
        "Time",
        "User",
        "Activity",
        "Entry",
        "Description",
    ];
    const selectedKeys = [
        "updatedAt",
        "time",
        "user",
        "activity",
        "entry",
        "description",
    ];
    return (
        <Table name="Activity Log">
            <Columns columns={columns} />
            <Row data={data} selectedKeys={selectedKeys} />
        </Table>
    );
};

export { ActivitylogTable };
