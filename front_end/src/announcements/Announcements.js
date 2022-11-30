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
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [searchValue, setSearchValue] = useState("");

    console.log("at announcements");
    console.log("\n\n !!!env var", process.env);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                console.log("mounted");
                setIsLoading(true);

                let query = searchValue
                    ? `/announcement/search?title=${page}`
                    : `/announcement?page=${page}`;
                const res = await client.get(query, {
                    withCredentials: true,
                });
                console.log("announcements: ", res.data.data);
                setAnnouncements(res.data.data);
                setTotalPage(searchValue ? totalPage : res.data.totalPage);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAnnouncements();
    }, [page, searchValue]);

    const handlePrev = () => {
        setPage(Math.max(0, page - 1));
    };

    const handleNext = () => {
        setPage(Math.min(totalPage - 1, page + 1));
    };
    return (
        <>
            {isLoading ? (
                "...loading"
            ) : (
                <>
                    <SearchBar />
                    <ul className="w-full py-4 flex flex-wrap gap-x-10 gap-y-5 justify-start items-center">
                        {announcements.map((announcement) => (
                            <li key={announcement.annnouncementId}>
                                <AnnouncementCard
                                    announcementId={announcement._id}
                                    title={announcement.title}
                                    image={announcement.image}
                                />
                            </li>
                        ))}
                    </ul>
                    {searchValue.length == 0 && (
                        <div className="self-center flex gap-4">
                            <button
                                className="bg-zinc-200 text-grey border text-sm rounded border-grey-200 py px-5 hover:bg-white hover:text-blue hover:border-blue"
                                onClick={handlePrev}
                            >
                                Prev
                            </button>
                            <p className="text-sm font-poppins text-grey-300 pointer">
                                {`Page ${page + 1} out of ${totalPage}`}
                            </p>
                            <button
                                className="bg-zinc-200 text-grey text-sm border rounded border-grey-200 py px-5 hover:bg-white hover:text-blue hover:border-blue"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Announcements;
