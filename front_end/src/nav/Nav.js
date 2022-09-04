import navLogo from "../assets/logo/nav_logo.svg";

const Nav = ({ backgroundClass }) => {
    return (
        <nav
            className={`fixed top-0 z-10 ${backgroundClass} w-full px-4 py-1.5 bg-red flex justify-between items-center`}
        >
            <img className="w-72" src={navLogo} alt="logo" />
            <div className="flex items-center gap-2 text-white font-poppins ">
                <div className="w-4 h-4 bg-black"></div> {/* avatar style*/}
                <button className="px-4 py-1 text-sm border-white border rounded-md :hover-bg-white :hover-text-white">
                    Log Out
                </button>
            </div>
        </nav>
    );
};

export default Nav;
