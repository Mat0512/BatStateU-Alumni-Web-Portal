import "../search_bar/SearchBar.js";
import SearchBar from "../search_bar/SearchBar.js";
import { AnnouncementCard } from "./components/AnnouncementCard.js";
import { announcementDummy } from "../dummy_data/announcements";
import { useState, useEffect, useContext } from "react";
import { client } from "../api/api";
import AuthContext from "../context/AuthContext";

const Announcements = () => {
    console.log("rendered");
    const [announcements, setAnnouncements] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    console.log("at announcements");
    console.log("\n\n !!!env var", process.env);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                console.log("mounted");

                setIsLoading(true);
                const res = await client.get("/announcement", {
                    withCredentials: true,
                });
                console.log("announcements: ", announcements);
                setAnnouncements(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAnnouncements();
    }, []);
    return (
        <>
            <SearchBar />
            <ul className="p-4 flex flex-wrap gap-x-10 gap-y-5">
                {isLoading
                    ? "...loading"
                    : announcements.map((announcement) => (
                          <li key={announcement.annnouncementId}>
                              <AnnouncementCard
                                  announcementId={announcement._id}
                                  title={announcement.title}
                                  image={announcement.image}
                              />
                          </li>
                      ))}
            </ul>
        </>
    );
};

export default Announcements;
