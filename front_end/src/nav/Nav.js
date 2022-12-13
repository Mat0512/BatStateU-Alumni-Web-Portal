import navLogo from "../assets/logo/nav_logo.svg";
import { useLogout } from "../hooks/useLogout";
import { useLogoutAdmin } from "../hooks/useLogoutAdmin";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { MobileNav } from "../mobile_nav/MobileNav";
import AdminAuthContext from "../context/AdminAuthContext";

const Nav = ({ backgroundColor, links, admin }) => {
    const logout = useLogout();
    const { auth } = useContext(AuthContext);
    const { authAdmin } = useContext(AdminAuthContext);
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
            <img className="md:w-72" src={navLogo} alt="logo" />
            <div className="hidden md:flex items-center gap-1 text-white font-poppins">
                <div className="w-8 mr-1.5">
                    {(auth.user || authAdmin.user) && (
                        <img
                            className="w-full h-full rounded-full"
                            src={auth.user ? auth.avatar : authAdmin.avatar}
                            alt="user avatar"
                        />
                    )}
                </div>
                {/* avatar style*/}
                <button
                    className="px-4 py-1 text-sm border-white border rounded-md hover:bg-white hover:text-red"
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
