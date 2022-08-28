import "./SideNav.css";
import iconAnnouncement from "../assets/icons/sidenav_announcement.svg";
import iconSurvey from "../assets/icons/sidenav_survey.svg";
import iconProfile from "../assets/icons/sidenav_profile.svg";
import iconForum from "../assets/icons/sidenav_forum.svg";
import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <nav className="side-nav">
            <ul>
                <li className="side-nav-links">
                    <img className="icons" src={iconAnnouncement} alt="" />
                    <Link to="/announcements    " className="links">
                        Announcements
                    </Link>
                </li>
                <li className="side-nav-links">
                    <img className="icons" src={iconSurvey} alt="" />
                    <Link to="/survey" className="links">
                        Survey
                    </Link>
                </li>
                <li className="side-nav-links">
                    <img className="icons" src={iconProfile} alt="" />
                    <Link to="/profile" className="links">
                        Profile
                    </Link>
                </li>
                <li className="side-nav-links">
                    <img className="icons" src={iconForum} alt="" />
                    <Link to="/forum" className="links">
                        Forum
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;
