import { useState } from "react";
import { client } from "../../api/api";
import { useContext } from "react";
import AnnouncementInputContext from "../../context/AnnouncementInputContext";
import AdminAuthContext from "../../context/AdminAuthContext";

const AnnouncementForm = ({ name }) => {
    const { announcementInput, setAnnouncementInput } = useContext(
        AnnouncementInputContext
    );
    const { authAdmin } = useContext(AdminAuthContext);

    const [isLoading, setIsLoading] = useState(false);
    // const [announcementData, setAnnouncementData] = useState({
    //     title: "",
    //     body: "",
    //     image: "",
    // });

    console.log("Annonucement input value at first load: ", announcementInput);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        console.log(
            "announcment input from handle submit: ",
            announcementInput
        );

        const formData = new FormData();
        formData.append("title", announcementInput.title);
        formData.append("body", announcementInput.body);
        formData.append("announcementImage", announcementInput.image);
        formData.append(
            "author",
            `${authAdmin.firstName} ${authAdmin.lastName}`
        );

        const postAnnouncement = async () => {
            try {
                await client.post(announcementInput.endpoint, formData, {
                    withCredentials: true,
                    headers: {
                        authorization: `Bearer ${authAdmin.token}`,
                    },
                });
                alert("announcement successfully added");
            } catch (err) {
                alert("Adding announcement failed.");
                console.log(err);
            } finally {
                setIsLoading(false);
                setAnnouncementInput({});
            }
        };

        postAnnouncement();
    };

    const handleOnChangeTitle = (e) => {
        setAnnouncementInput({ ...announcementInput, title: e.target.value });
    };

    const handleOnChangeDescription = (e) => {
        setAnnouncementInput({ ...announcementInput, body: e.target.value });
    };

    const handleOnChangeFile = (e) => {
        console.log("file: ", e.target.files);
        setAnnouncementInput({
            ...announcementInput,
            image: e.target.files[0],
        });
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
                    name="title"
                    className="p-2 rounded border border-grey-300"
                    type="text"
                    placeholder="Enter announcement title here."
                    value={announcementInput.title}
                    onChange={handleOnChangeTitle}
                    required
                />
            </div>

            <div className="flex flex-col mt-2">
                <label htmlFor="description">Description</label>
                <textarea
                    className="h-64 p-2 rounded border border-grey-300"
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Enter announcement details here."
                    value={announcementInput.body}
                    onChange={handleOnChangeDescription}
                    required
                />
            </div>
            <div className="mt-3">
                <label htmlFor="announcementImage">
                    Choose an announcement image
                </label>
                <input
                    className="text-sm"
                    id="announcementImage"
                    name="announcementImage"
                    type="file"
                    accept=".png, .jpg, .svg"
                    onChange={handleOnChangeFile}
                    required
                />
            </div>

            <button
                className="block w-full px-4 py-2 bg-green text-white rounded mt-3"
                onClick={handleSubmit}
            >
                Add Announcement
            </button>
            {isLoading ? "Loading..." : null}
        </form>
    );
};

export { AnnouncementForm };
