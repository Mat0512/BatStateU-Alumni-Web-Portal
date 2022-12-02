import { useState, useEffect, useContext } from "react";
import { client } from "../api/api";
import { format, parseISO } from "date-fns";
import AdminAuthContext from "../context/AdminAuthContext";

const useFetchAnnouncement = (page, limit) => {
    const [announcements, setAnnouncements] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { authAdmin } = useContext(AdminAuthContext);
    const [totalPage, setTotalPage] = useState(0);

    const announcementKeyUsed = ["_id", "title", "author", "updatedAt"];

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                setIsLoading(true);
                const res = await client.get(
                    `/announcement?page=${page}&limit=${limit}`,
                    {
                        headers: {
                            authorization: `Bearer ${authAdmin.token}`,
                        },
                    }
                );
                //filtering data before saving into state

                const filteredAnnouncement = res.data.data.map((data) => {
                    const filteredData = {};
                    announcementKeyUsed.forEach((key) => {
                        filteredData[key] = data[key];
                    });

                    return {
                        ...filteredData,
                        updatedAt: format(
                            parseISO(filteredData.updatedAt),
                            "MMMM dd, yyyy"
                        ),
                    };
                });

                setAnnouncements(filteredAnnouncement);
                setTotalPage(res.data.totalPage);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAnnouncement();
    }, [page]);

    return { announcements, isLoading, totalPage };
};

export { useFetchAnnouncement };
