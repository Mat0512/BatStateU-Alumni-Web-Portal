import "./SideNav.css";
import iconAnnouncement from "../assets/icons/sidenav_announcement.svg";
import iconSurvey from "../assets/icons/sidenav_survey.svg";
import iconProfile from "../assets/icons/sidenav_profile.svg";
import iconForum from "../assets/icons/sidenav_forum.svg";

const SideNav = () => {
    return (
        <nav className="side-nav">
            <ul>
                <li className="side-nav-links">
                    <img className="icons" src={iconAnnouncement} alt="" />
                    <a className="links" href="#">
                        Announcement
                    </a>
                </li>
                <li className="side-nav-links">
                    <img className="icons" src={iconSurvey} alt="" />
                    <a className="links" href="#">
                        Surveys
                    </a>
                </li>
                <li className="side-nav-links">
                    <img className="icons" src={iconProfile} alt="" />
                    <a className="links" href="#">
                        Account
                    </a>
                </li>
                <li className="side-nav-links">
                    <img className="icons" src={iconForum} alt="" />
                    <a className="links" href="#">
                        Forum
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;
