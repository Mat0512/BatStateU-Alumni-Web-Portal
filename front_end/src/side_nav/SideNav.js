import { Link } from "react-router-dom";

const SideNav = ({ links, admin }) => {
    // creates an array of li tags from links prop and embeds it into react router Link component
    // first link element will set into default or index route
    const navLinks = links.map((link, i) => {
        let parentLink = admin ? "admin" : "alumni";
        return (
            <li key={link} className="pl-5 pb-1.5 flex items-center">
                <Link
                    to={`/${parentLink}/${
                        i === 0 ? "" : link.toLowerCase().split(" ").join("")
                    }`}
                    className="links"
                >
                    {link}
                </Link>
            </li>
        );
    });

    return (
        <nav className="hidden fixed top-0 w-48 h-full pt-20 bg-grey-100 md:flex flex-col gap-2 font-poppins border border-grey-200 shadow-sm">
            <ul>{navLinks}</ul>
        </nav>
    );
};

export default SideNav;
