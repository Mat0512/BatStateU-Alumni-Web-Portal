import { Link } from "react-router-dom";

const SideNav = ({ links, admin }) => {
    // creates an array of li tags from links prop and embeds it into react router Link component
    // first link element will set into default or index route
    const navLinks = links.map((link, i) => {
        let parentLink = admin ? "admin" : "alumni";
        return (
            <li key={link} className="px-4 py-2 flex items-center">
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
        <nav className="fixed top-0 w-52 h-full pt-16 bg-grey-200 flex flex-col gap-2 font-poppins sm:hidden lg:block">
            <ul>{navLinks}</ul>
        </nav>
    );
};

export default SideNav;
