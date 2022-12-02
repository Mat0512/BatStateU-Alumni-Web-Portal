import { Table } from "../table/Table";
import { Row } from "../table/Row";
import { Columns } from "../table/Columns";
import { ButtonTableColumn } from "./ButtonTableColumn";
import { useFetchAnnouncement } from "../hooks/useFetchAnnouncements";
import AnnouncementInputContext from "../context/AnnouncementInputContext";
import AdminAuthContext from "../context/AdminAuthContext";
import DeleteDataContext from "../context/DeleteDataContext";
import { useContext, useState } from "react";
import { client } from "../api/api";

//Table that contains added announcement with title,

const AnnouncementPostsTable = ({
    setDisplayModalEditAnnouncement,
    setDisplayModalDeleteNotice,
}) => {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(0);

    const { announcements, isLoading, totalPage } = useFetchAnnouncement(
        page,
        limit
    );
    const { announcementInput, setAnnouncementInput } = useContext(
        AnnouncementInputContext
    );
    const { authAdmin } = useContext(AdminAuthContext);
    const { setDataToDelete } = useContext(DeleteDataContext);

    //the empty string in cols array are for action column which makes the rows and column align
    const cols = ["Title", "Posted By", "Date Added", ""];

    const handlePrev = () => {
        setPage(Math.max(0, page - 1));
    };

    const handleNext = () => {
        setPage(Math.min(totalPage - 1, page + 1));
    };

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

    const tablePagingRow = (
        <div className="flex flex-row gap-4">
            <>
                <button
                    className="bg-zinc-200 text-grey border text-sm rounded border-grey-200 py px-5 hover:bg-white hover:text-blue hover:border-blue"
                    onClick={handlePrev}
                >
                    Prev
                </button>
                <button
                    className="bg-zinc-200 text-grey border text-sm rounded border-grey-200 py px-5 hover:bg-white hover:text-blue hover:border-blue"
                    onClick={handleNext}
                >
                    Next
                </button>
            </>
        </div>
    );

    return (
        <>
            {isLoading ? (
                <p>loading</p>
            ) : (
                <>
                    <Table name="Posted Announcement" paging={tablePagingRow}>
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
                </>
            )}
        </>
    );
};

export { AnnouncementPostsTable };
