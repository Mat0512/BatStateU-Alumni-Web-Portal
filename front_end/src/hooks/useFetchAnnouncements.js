import { useState, useEffect, useContext } from "react";
import { client } from "../api/api";
import AdminAuthContext from "../context/AdminAuthContext";

const useFetchAnnouncement = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { authAdmin } = useContext(AdminAuthContext);

    const announcementKeyUsed = ["_id", "title", "author", "createdAt"];

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                setIsLoading(true);
                const res = await client.get("/announcement", {
                    headers: {
                        authorization: `Bearer ${authAdmin.token}`,
                    },
                });
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
