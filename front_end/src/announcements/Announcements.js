import "../search_bar/SearchBar.js";
import SearchBar from "../search_bar/SearchBar.js";
import "./Announcements.css";
import imgPlaceholder from "../assets/placeholder-img.jpg";

const AnnouncementCard = (props) => {
    return (
        <div className="announcement-card">
            <h1 className="announcement-h1">Lorem IpsuM Dolor Ismaet</h1>
            <div className="announcement-img">
                <img src={imgPlaceholder} alt="announcement-img" />
            </div>
            <div className="announcement-description">
                <p className="description-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="announcement-link">
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
            <ul className="announcement-list">
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
