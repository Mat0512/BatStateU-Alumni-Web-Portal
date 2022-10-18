import AnnouncementInputContext from "../context/AnnouncementInputContext";
import plusIcon from "../assets/icons/plus.svg";
import { useState, useContext } from "react";

const PostButtons = ({
    setDisplayModalAddAnnouncement,
    setDisplayModalAddSurvey,
}) => {
    const { setAnnouncementInput } = useContext(AnnouncementInputContext);

    const handleAddSurvey = () => {
        console.log("click add survey");
        setDisplayModalAddSurvey(true);
    };

    const handleAddAnnouncement = (e) => {
        console.log("click add announcement");

        setAnnouncementInput({
            title: "",
            body: "",
            image: "",
        });

        setDisplayModalAddAnnouncement(true);
    };

    return (
        <div className="flex gap-6">
            <div
                className="px-5 py-4 flex gap-3 items-center border border-grey-200 shadow-sm shadow-grey-200"
                onClick={handleAddAnnouncement}
            >
                <img className="h-6" src={plusIcon} alt="plus icon" />
                <p className="text-md font-poppins">Post Announcement</p>
            </div>
            <div
                className="px-5 py-4 flex gap-3 items-center border border-grey-200 shadow-sm shadow-grey-200"
                onClick={handleAddSurvey}
            >
                <img className="h-6" src={plusIcon} alt="plus icon" />
                <p className="text-md font-poppins">Post Survey</p>
            </div>
        </div>
    );
};

export { PostButtons };
