import { useState } from "react";
import { client } from "../../api/api";

const AnnouncementForm = ({ name, endpoint }) => {
    const [announcementData, setAnnouncementData] = useState({
        title: "",
        body: "",
        author: "",
        image: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        formData.append("title", announcementData.title);
        formData.append("body", announcementData.title);
        formData.append("image", announcementData.title);

        const postAnnouncement = async () => {
            try {
                await client.post(endpoint, formData);
            } catch (err) {
                alert("Adding announcement failed.");
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        postAnnouncement();
    };

    const handleOnChangeTitle = (e) => {
        setAnnouncementData({ ...announcementData, title: e.target.value });
    };

    const handleOnChangeDescription = (e) => {
        setAnnouncementData({ ...announcementData, body: e.target.value });
    };

    const handleOnChangeFile = (e) => {
        setAnnouncementData({ ...announcementData, image: e.target.file[0] });
    };

    return (
        <form
            encType="multipart/form-data"
            className="max-w-xl w-full p-7 bg-white font-poppins"
        >
            <h1 className="text-2xl">{name}</h1>
            <div className="flex flex-col mt-2 ">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    className="p-2 rounded border border-grey-300"
                    type="text"
                    placeholder="Enter announcement title here."
                    value={announcementData.title}
                    onChange={handleOnChangeTitle}
                />
            </div>

            <div className="flex flex-col mt-2">
                <label htmlFor="description">Description</label>
                <textarea
                    className="h-64 p-2 rounded border border-grey-300"
                    id="description"
                    type="text"
                    placeholder="Enter announcement details here."
                    value={announcementData.description}
                    onChange={handleOnChangeDescription}
                />
            </div>
            <div className="mt-3">
                <label htmlFor="image">Choose an announcement image</label>
                <input
                    className="text-sm"
                    id="image"
                    type="file"
                    accept=".png, .jpg, .svg"
                    onChange={handleOnChangeFile}
                />
            </div>

            <button
                className="block w-full px-4 py-2 bg-green text-white rounded mt-3"
                onClick={handleSubmit}
            >
                Add Announcement
            </button>
        </form>
    );
};

export { AnnouncementForm };
