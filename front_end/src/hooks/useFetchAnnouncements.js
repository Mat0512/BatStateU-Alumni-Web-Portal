import { useState, useEffect } from "react";
import { client } from "../api/api";

const useFetchAnnouncement = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const announcementKeyUsed = ["_id", "title", "author", "createdAt"];

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                setIsLoading(true);
                const res = await client.get("/announcement");
                //filtering data before saving into state

                const filteredAnnouncement = res.data.map((data) => {
                    const filteredData = {};
                    announcementKeyUsed.forEach((key) => {
                        filteredData[key] = data[key];
                    });

                    return filteredData;
                });

                setAnnouncements(filteredAnnouncement);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAnnouncement();
    }, []);

    return { announcements, isLoading };
};

export { useFetchAnnouncement };
