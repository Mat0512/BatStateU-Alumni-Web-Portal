import { useContext } from "react";
import AnnouncementInputContext from "../context/AnnouncementInputContext";
import DeleteDataContext from "../context/DeleteDataContext";
import { client } from "../api/api";
import { Button } from "../table/Button";

const ButtonTableColumn = ({
    setDisplayModalEdit,
    setDisplayModalDeleteNotice,
}) => {
    const { announcementInput, setAnnouncementInput } = useContext(
        AnnouncementInputContext
    );
    const { setDataToDelete } = useContext(DeleteDataContext);
    const handleEditAnnouncement = (event) => {
        const announcementId = event.target.parentNode.parentNode.id;

        const getAnnouncementData = async () => {
            try {
                const res = await client.get(`/announcement/${announcementId}`);
                setAnnouncementInput({
                    title: res.data.title,
                    body: res.data.body,
                    image: res.data.image,
                });

                if (!res) {
                    alert("Can't get announcement data");
                }

                console.log("announcement input: ", announcementInput);

                setDisplayModalEdit(true);
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
};

export { ButtonTableColumn };
