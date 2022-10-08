import { PostButton } from "./PostButton";
import { AnnouncementPostsTable } from "./AnnouncementPostsTable";

const Post = () => {
    const handleAddSurvey = () => {
        console.log("click add survey");
    };

    const handleAddAnnouncement = (e) => {
        console.log("click add announcement");
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-6">
                <PostButton
                    label="Add Announcement"
                    handleClick={handleAddAnnouncement}
                />
                <PostButton label="Add Survey" handleClick={handleAddSurvey} />
            </div>
            <AnnouncementPostsTable />
        </div>
    );
};

export { Post };
