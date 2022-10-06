import navLogo from "../assets/logo/nav_logo.svg";
import { useLogout } from "../hooks/useLogout";
import { useLogoutAdmin } from "../hooks/useLogoutAdmin";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Nav = ({ backgroundColor, admin }) => {
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
            className={`fixed top-0 z-10 ${backgroundColor} w-full px-4 py-2 bg-red flex justify-between items-center`}
        >
            <img className="w-72" src={navLogo} alt="logo" />
            <div className="flex items-center gap-1 text-white font-poppins ">
                <div className="w-4 h-4 bg-black"></div> {/* avatar style*/}
                <button
                    className="px-4 py-1 text-sm border-white border rounded-md :hover-bg-white :hover-text-white"
                    onClick={handleLogout}
                >
                    Log Out
                </button>
            </div>
        </nav>
    );
};

export default Nav;
