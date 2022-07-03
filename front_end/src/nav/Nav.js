import "./Nav.css";
import navLogo from "../assets/logo/nav_logo.svg";
const Nav = () => {
    return (
        <nav className="nav">
            <img className="logo" src={navLogo} alt="logo" />
            <div className="profile-buttons">
                <div className="nav-avatar"></div>
                <button className="button-signout">Log Out</button>
            </div>
        </nav>
    );
};

export default Nav;
