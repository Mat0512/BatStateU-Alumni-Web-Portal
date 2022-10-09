import { PostButton } from "./PostButton";
import { AnnouncementPostsTable } from "./AnnouncementPostsTable";
import { AnnouncementForm } from "./modal/AnnouncementForm";
import { ModalHandler } from "../modals/ModalHandler";
import { useState } from "react";

const Post = () => {
    const [displayModalAddAnnouncement, setDisplayModalAddAnnouncement] =
        useState(false);
    const [displayModalEditAnnouncement, setDisplayModalEditAnnouncement] =
        useState(false);

    const handleAddSurvey = () => {
        console.log("click add survey");
        setDisplayModalAddAnnouncement(true);
    };

    const handleAddAnnouncement = (e) => {
        console.log("click add announcement");
        setDisplayModalAddAnnouncement(true);
    };

    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                    <PostButton
                        label="Add Announcement"
                        handleClick={handleAddAnnouncement}
                    />
                    <PostButton
                        label="Add Survey"
                        handleClick={handleAddSurvey}
                    />
                </div>
                <AnnouncementPostsTable
                    setDisplayModal={setDisplayModalEditAnnouncement}
                />
            </div>

            {/* {displayModalAddAnnouncement ? (
                // <ModalHandler
                //     displayModal={displayModalAddAnnouncement}
                //     setDisplayModal={setDisplayModalAddAnnouncement}
                // >
                //     <AnnouncementForm
                //         name="Add Announcement"
                //         endpoint="/announcement/add"
                //     />
                <p>ADD Announcement</p>
            ) : // </ModalHandler>
            displayModalEditAnnouncement ? (
                <ModalHandler
                    displayModal={displayModalEditAnnouncement}
                    setDisplayModal={setDisplayModalEditAnnouncement}
                >
                    <AnnouncementForm
                        name="Edit Announcement"
                        endpoint="/announcement/edit"
                    />
                </ModalHandler>
            ) : (
                <p>HEllO</p>
            )} */}
        </>
    );
};

export { Post };
