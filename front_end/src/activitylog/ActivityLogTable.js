import { Table } from "../table/Table";
import { Row } from "../table/Row";
import { Columns } from "../table/Columns";

const dummy = [
    {
        Date: "date",
        Time: "time time time",
        User: "name name",
        Activity: "activity",
        Entry: "type",
        Description: "desc desc desc desc desc desc desc",
    },
    {
        Date: "date",
        Time: "time time time",
        User: "name name",
        Activity: "activity",
        Entry: "type",
        Description: "desc desc desc desc desc desc desc",
    },
    {
        Date: "date",
        Time: "time time time",
        User: "name name",
        Activity: "activity",
        Entry: "type",
        Description: "desc desc desc desc desc desc desc",
    },
    {
        Date: "date",
        Time: "time time time",
        User: "name name",
        Activity: "activity",
        Entry: "type",
        Description: "desc desc desc desc desc desc desc",
    },
    {
        Date: "date",
        Time: "time time time",
        User: "name name",
        Activity: "activity",
        Entry: "type",
        Description: "desc desc desc desc desc desc desc",
    },
    {
        Date: "date",
        Time: "time time time",
        User: "name name",
        Activity: "activity",
        Entry: "type",
        Description: "desc desc desc desc desc desc desc",
    },
];

const ActivitylogTable = () => {
    const columns = [
        "Date",
        "Time",
        "User",
        "Activity",
        "Entry",
        "Description",
    ];
    return (
        <Table name="Activity Log">
            <Columns columns={columns} />
            <Row data={dummy} />
        </Table>
    );
};

export { ActivitylogTable };
