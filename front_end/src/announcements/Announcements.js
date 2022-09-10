import "../search_bar/SearchBar.js";
import SearchBar from "../search_bar/SearchBar.js";
import imgPlaceholder from "../assets/placeholder-img.jpg";

const AnnouncementCard = (props) => {
    return (
        <div className="w-full max-w-lg flex flex-col gap-3 bg-grey-100 px-8 py-6 border border-grey-200 rounded shadow-lg font-poppins text-sm">
            <h1 className="font-montserrat text-xl text-blue">
                Lorem IpsuM Dolor Ismaet
            </h1>
            <div className="max-h-lg">
                <img src={imgPlaceholder} alt="announcement-img" />
            </div>
            <div className="flex justify-between between">
                <p className="max-w-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                    href="#"
                    className="self-center text-light-blue hover:text-blue"
                >
                    View More &#8594;
                </a>
            </div>
        </div>
    );
};

const Announcements = () => {
    return (
        <>
            <SearchBar />
            <ul className="p-4 flex flex-wrap gap-x-10 gap-y-5">
                <li>
                    <AnnouncementCard />
                </li>
                <li>
                    <AnnouncementCard />
                </li>
                <li>
                    <AnnouncementCard />
                </li>
                <li>
                    <AnnouncementCard />
                </li>
            </ul>
        </>
    );
};

export default Announcements;
