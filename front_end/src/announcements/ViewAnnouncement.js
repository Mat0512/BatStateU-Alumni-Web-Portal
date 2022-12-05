import { useParams, Link } from "react-router-dom";
import { announcementDummy } from "../dummy_data/announcements";
import { useState, useEffect } from "react";
import imgPlaceholder from "../assets/placeholder-img.jpg";
import { client } from "../api/api";
import { format, parseISO } from "date-fns";

const ViewAnnouncement = () => {
    console.log("rendered");
    const params = useParams();
    const [announcement, setAnnouncement] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log("mounted");

        const fetchAnnouncement = async () => {
            try {
                setIsLoading(true);
                const res = await client(
                    `/announcement/${params.announcementId}`,
                    {
                        withCredentials: true,
                    }
                );
                console.log("res: ", res);
                setAnnouncement({
                    ...res.data,
                    updatedAt: format(
                        parseISO(res.data.updatedAt),
                        "MMMM dd, yyyy"
                    ),
                });
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAnnouncement();
    }, []);

    console.log("found: ", announcement);

    return (
        <>
            {isLoading ? (
                "loading..."
            ) : announcement.length == 0 ? (
                "not found"
            ) : (
                <>
                    <Link
                        to="../"
                        className="font-poppins text-xl text-blue hover:text-light-blue"
                    >
                        &#x3c; Back
                    </Link>
                    <div className="ml-2 font-poppins text-grey-400 max-w-2xl flex flex-col gap-9 py-4 px-10">
                        <div className="font-poppins">
                            <h1 className="text-2xl">{announcement.title}</h1>
                            <p>{announcement.updatedAt}</p>
                        </div>
                        <div className=" h-auto overflow-hidden">
                            <img
                                className="object-cover w-full h-full"
                                src={announcement.image}
                                alt="announcment image"
                            />
                        </div>
                        <p className="font-poppins text-justify">
                            {announcement.body}
                        </p>
                    </div>
                </>
            )}
        </>
    );
};

export { ViewAnnouncement };
