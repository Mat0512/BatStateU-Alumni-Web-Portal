import Nav from "../nav/Nav";
import Sidenav from "../side_nav/SideNav";
import Main from "../main/Main";
import { Helmet } from "react-helmet";
const adminNavLinks = [
    "DashBoard",
    "Survey",
    "Post",
    "Activity Log",
    "Alumni Records",
    "Account",
    "Add Admin",
];

const AdminLayout = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>Admin Portal</title>
            </Helmet>
            <Nav backgroundColor={"bg-grey-300"} links={adminNavLinks} admin />
            <Sidenav links={adminNavLinks} admin />
            {/*make this a nav that accepts list of links and img */}
            <Main>{children}</Main>
        </>
    );
};

export { AdminLayout };
