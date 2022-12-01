import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useLogoutAdmin } from "../hooks/useLogoutAdmin";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import hamburgerMenu from "../assets/icons/menu.png";
import closeMenu from "../assets/icons/exit-icon.png";

const MobileNav = ({ links, admin }) => {
    const logout = useLogout();
    const { auth } = useContext(AuthContext);
    const logoutAdmin = useLogoutAdmin();
    const [displayMenu, setDisplayMenu] = useState(false);

    const handleLogout = async () => {
        if (auth.token) {
            await logout();
        } else {
            await logoutAdmin();
        }
    };
    const navLinks = links.map((link, i) => {
        let parentLink = admin ? "admin" : "alumni";
        return (
            <li
                key={link}
                onClick={() => {
                    setDisplayMenu(false);
                }}
            >
                <NavLink
                    to={`/${parentLink}/${
                        i === 0 ? "" : link.toLowerCase().split(" ").join("")
                    }`}
                    className="text-lg font-poppins"
                >
                    {link}
                </NavLink>
            </li>
        );
    });

    return (
        <div className="md:hidden">
            <img
                src={displayMenu ? closeMenu : hamburgerMenu}
                className="h-8"
                onClick={() => {
                    setDisplayMenu(!displayMenu);
                }}
                alt="menu icon"
            />

            {displayMenu && (
                <div className="absolute right-0 top-20 w-2/4 h-[20rem] bg-red text-white flex flex-col justify-center">
                    <ul className="flex flex-col items-center gap-4">
                        {navLinks}
                        <li
                            key="logout"
                            className="text-lg font-poppins"
                            onClick={handleLogout}
                        >
                            Log Out
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export { MobileNav };
