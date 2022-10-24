import { Table } from "../table/Table";
import { Row } from "../table/Row";
import { Columns } from "../table/Columns";
import { ButtonTableColumn } from "./ButtonTableColumn";
import { useFetchAnnouncement } from "../hooks/useFetchAnnouncements";
import AnnouncementInputContext from "../context/AnnouncementInputContext";
import AdminAuthContext from "../context/AdminAuthContext";
import DeleteDataContext from "../context/DeleteDataContext";
import { useContext } from "react";
import { client } from "../api/api";

//Table that contains added announcement with title,

const AnnouncementPostsTable = ({
    setDisplayModalEditAnnouncement,
    setDisplayModalDeleteNotice,
}) => {
    const { announcements, isLoading } = useFetchAnnouncement();
    const { announcementInput, setAnnouncementInput } = useContext(
        AnnouncementInputContext
    );
    const { authAdmin } = useContext(AdminAuthContext);
    const { setDataToDelete } = useContext(DeleteDataContext);

    //the empty string in cols array are for action column which makes the rows and column align
    const cols = ["Title", "Posted By", "Date Added", ""];

    const handleEditAnnouncement = (event) => {
        const announcementId = event.target.parentNode.parentNode.id;

        const getAnnouncementData = async () => {
            try {
                const res = await client.get(
                    `/announcement/${announcementId}`,
                    {
                        headers: {
                            authorization: `Bearer ${authAdmin.token}`,
                        },
                    }
                );
                setAnnouncementInput({
                    title: res.data.title,
                    body: res.data.body,
                    image: res.data.image,
                    endpoint: `/announcement/edit/${announcementId}`,
                });

                console.log("announcement input: ", announcementInput);

                setDisplayModalEditAnnouncement(true);
            } catch (error) {
                alert("Error");
                console.log("Error: ", error);
            }
        };

        getAnnouncementData();
    };

    const handleDeleteAnnouncement = (event) => {
        const announcementId = event.target.parentNode.parentNode.id;
        setDataToDelete({
            endpoint: `/announcement/delete/${announcementId}`,
        });
        setDisplayModalDeleteNotice(true);
    };

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
                                setDisplayModalEdit={
                                    setDisplayModalEditAnnouncement
                                }
                                setDisplayModalDeleteNotice={
                                    setDisplayModalDeleteNotice
                                }
                                handleEditCLick={handleEditAnnouncement}
                                handleDeleteClick={handleDeleteAnnouncement}
                            />
                        }
                    />
                </Table>
            )}
        </>
    );
};

export { AnnouncementPostsTable };
