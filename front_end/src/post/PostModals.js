import { ModalHandler } from "../modals/ModalHandler";
import { AnnouncementForm } from "./modal/AnnouncementForm";
import { DeleteConfirmation } from "./modal/DeleteConfirmation";

const PostModals = ({
    displayModalAddAnnouncement,
    setDisplayModalAddAnnouncement,
    displayModalEditAnnouncement,
    setDisplayModalEditAnnouncement,
    displayModalDeleteNotice,
    setDisplayModalDeleteNotice,
    displayModalAddSurvey,
    setDisplayModalAddSurvey,
}) => {
    return (
        <>
            {displayModalAddAnnouncement ? (
                <ModalHandler
                    displayModal={displayModalAddAnnouncement}
                    setDisplayModal={setDisplayModalAddAnnouncement}
                >
                    <AnnouncementForm
                        name="Add Announcement"
                        endpoint="/announcement/add"
                    />
                </ModalHandler>
            ) : displayModalEditAnnouncement ? (
                <ModalHandler
                    displayModal={displayModalEditAnnouncement}
                    setDisplayModal={setDisplayModalEditAnnouncement}
                >
                    <AnnouncementForm
                        name="Edit Announcement"
                        endpoint="/announcement/edit"
                    />
                </ModalHandler>
            ) : displayModalDeleteNotice ? (
                <ModalHandler
                    displayModal={displayModalDeleteNotice}
                    setDisplayModal={setDisplayModalDeleteNotice}
                >
                    <DeleteConfirmation
                        setDisplayModal={setDisplayModalDeleteNotice}
                    />
                </ModalHandler>
            ) : null}
        </>
    );
};

export { PostModals };
