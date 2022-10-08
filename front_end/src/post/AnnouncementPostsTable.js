import { useState, useEffect } from "react";
import { Table } from "../table/Table";
import { Row } from "../table/Row";
import { Columns } from "../table/Columns";
import { Button } from "../table/Button";
import { client } from "../api/api";

//Table that contains added announcement with title,

const AnnouncementPostsTable = () => {
    //value from rowValues state are filtered response as indicated in announcementKeyUsed array
    const [rowValues, setRowValues] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    //the empty string in cols array are for action column which makes the rows and column align
    const cols = ["Title", "Posted By", "Date Added", ""];
    const announcementKeyUsed = ["_id", "author", "title", "createdAt"];

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                setIsLoading(true);
                const res = await client.get("/announcement");
                //filtering data before saving into state
                const filteredAnnouncement = res.data.map((data) => {
                    const filteredData = {};
                    announcementKeyUsed.forEach((key) => {
                        filteredData[key] = data[key];
                    });

                    return filteredData;
                });

                setRowValues(filteredAnnouncement);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAnnouncement();
    }, []);

    // event handler functions action for column buttons
    const handleEditAnnouncement = (e) => {
        console.log("edit announcment");
    };

    const handleDeleteAnnouncement = (e) => {
        console.log("delete announcement");
    };

    //actionColumn will be the last column in the table that contains edit and delete buttons,
    //id will be get on event object and passed as parameter in api calls
    const actionColumn = (
        <div className="flex gap-2 items-center">
            <Button
                label={"Edit"}
                color={"blue"}
                handleClick={handleEditAnnouncement}
            ></Button>
            <Button
                label={"Delete"}
                color={"red"}
                handleClick={handleDeleteAnnouncement}
            ></Button>
        </div>
    );
    return (
        <>
            {isLoading ? (
                <p>loading</p>
            ) : (
                <Table name="Posted Announcement">
                    <Columns columns={cols} />
                    <Row
                        data={rowValues}
                        actionColumn={actionColumn}
                        columns={cols}
                        keys={announcementKeyUsed}
                    />
                </Table>
            )}
        </>
    );
};

export { AnnouncementPostsTable };
