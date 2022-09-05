import Nav from "../nav/Nav";
import Sidenav from "../side_nav/SideNav";
import Main from "../main/Main";
import Footer from "../footer/Footer";

const alumniNavLinks = ["Announcements", "Survey", "Account"];

const AlumniLayout = ({ children }) => {
    return (
        <>
            <Nav backgroundColor={"bg-red"} />
            <Sidenav links={alumniNavLinks} />
            {/*make this a nav that accepts list of links and img */}
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default AlumniLayout;
