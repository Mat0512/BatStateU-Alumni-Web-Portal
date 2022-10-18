import { Table } from "../table/Table";
import { Row } from "../table/Row";
import { Columns } from "../table/Columns";
import { ButtonTableColumn } from "./ButtonTableColumn";
import { useFetchAnnouncement } from "../hooks/useFetchAnnouncements";

//Table that contains added announcement with title,

const AnnouncementPostsTable = ({
    setDisplayModalEditAnnouncement,
    setDisplayModalDeleteNotice,
}) => {
    const { announcements, isLoading } = useFetchAnnouncement();

    //the empty string in cols array are for action column which makes the rows and column align
    const cols = ["Title", "Posted By", "Date Added", ""];

    return (
        <>
            {isLoading ? (
                <p>loading</p>
            ) : (
                <Table name="Posted Announcement">
                    <Columns columns={cols} />
                    <Row
                        data={announcements}
                        actionColumn={
                            <ButtonTableColumn
                                setDisplayModalEditAnnouncement={
                                    setDisplayModalEditAnnouncement
                                }
                                setDisplayModalDeleteNotice={
                                    setDisplayModalDeleteNotice
                                }
                            />
                        }
                    />
                </Table>
            )}
        </>
    );
};

export { AnnouncementPostsTable };
