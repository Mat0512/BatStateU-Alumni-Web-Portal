import navLogo from "../assets/logo/nav_logo.svg";
import { useLogout } from "../hooks/useLogout";
import { useLogoutAdmin } from "../hooks/useLogoutAdmin";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { MobileNav } from "../mobile_nav/MobileNav";

const Nav = ({ backgroundColor, links, admin }) => {
    const logout = useLogout();
    const { auth } = useContext(AuthContext);
    const logoutAdmin = useLogoutAdmin();

    const handleLogout = async () => {
        if (auth.token) {
            await logout();
        } else {
            await logoutAdmin();
        }
    };

    return (
        <nav
            className={`fixed top-0 z-10 ${backgroundColor} h-20 md:h-auto w-full px-4 py-2 bg-red flex justify-between items-center`}
        >
            <img className="w-72" src={navLogo} alt="logo" />
            <div className="hidden md:flex items-center gap-1 text-white font-poppins">
                <div className="w-4 h-4 bg-black"></div> {/* avatar style*/}
                <button
                    className="px-4 py-1 text-sm border-white border rounded-md :hover-bg-white :hover-text-white"
                    onClick={handleLogout}
                >
                    Log Out
                </button>
            </div>
            <MobileNav links={links} />
        </nav>
    );
};

export default Nav;
