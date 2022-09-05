import "./SideNav.css";
// import iconAnnouncement from "../assets/icons/sidenav_announcement.svg";
// import iconSurvey from "../assets/icons/sidenav_survey.svg";
// import iconProfile from "../assets/icons/sidenav_profile.svg";
// import iconForum from "../assets/icons/sidenav_forum.svg";
import { Link } from "react-router-dom";

const SideNav = ({ links, admin }) => {
    // creates an array of li tags from links prop and embeds it into react router Link component
    // first link element will set into default or index route
    const navLinks = links.map((link, i) => {
        let parentLink = admin ? "admin" : "alumni";
        return (
            <li key={link} className="side-nav-links">
                <Link
                    to={`/${parentLink}/${i === 0 ? "" : link.toLowerCase()}`}
                    className="links"
                >
                    {link}
                </Link>
            </li>
        );
    });

    return (
        <nav className="side-nav">
            <ul>{navLinks}</ul>
        </nav>
    );
};

export default SideNav;
