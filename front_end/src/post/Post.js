import { AnnouncementPostsTable } from "./AnnouncementPostsTable";
import { SurveyPostsTable } from "./SurveyPostsTable";
import { useState } from "react";
import { PostButtons } from "./PostButtons";
import { ModalHandler } from "../modals/ModalHandler";
import { AnnouncementForm } from "./modal/AnnouncementForm";
import { DeleteConfirmation } from "./modal/DeleteConfirmation";
import { SurveyFormInputContextProvider } from "../context/SurveyFormInputContext";
import { SurveyForm } from "./modal/SurveyForm";

const Post = () => {
    const [displayModalAddAnnouncement, setDisplayModalAddAnnouncement] =
        useState(false);
    const [displayModalAddSurvey, setDisplayModalAddSurvey] = useState(false);
    const [displayModalEditSurvey, setDisplayModalEditSurvey] = useState(false);

    const [displayModalEditAnnouncement, setDisplayModalEditAnnouncement] =
        useState(false);
    const [displayModalDeleteNotice, setDisplayModalDeleteNotice] =
        useState(false);

    return (
        <SurveyFormInputContextProvider>
            <div className="flex flex-col gap-6">
                <PostButtons
                    setDisplayModalAddAnnouncement={
                        setDisplayModalAddAnnouncement
                    }
                    setDisplayModalAddSurvey={setDisplayModalAddSurvey}
                />
                <AnnouncementPostsTable
                    setDisplayModalEditAnnouncement={
                        setDisplayModalEditAnnouncement
                    }
                    setDisplayModalDeleteNotice={setDisplayModalDeleteNotice}
                />
                <SurveyPostsTable
                    setDisplayModalEditSurvey={setDisplayModalEditSurvey}
                    setDisplayModalDeleteNotice={setDisplayModalDeleteNotice}
                />
            </div>
            {/*Modals */}
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
            ) : displayModalAddSurvey ? (
                <ModalHandler
                    displayModal={displayModalAddSurvey}
                    setDisplayModal={setDisplayModalAddSurvey}
                >
                    <SurveyForm title="Add Survey" endpoint="endpoint" />
                </ModalHandler>
            ) : displayModalEditSurvey ? (
                <ModalHandler
                    displayModal={displayModalAddSurvey}
                    setDisplayModal={setDisplayModalAddSurvey}
                >
                    <SurveyForm title="Edit Survey" endpoint="endpoint" />
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
        </SurveyFormInputContextProvider>
    );
};

export { Post };
