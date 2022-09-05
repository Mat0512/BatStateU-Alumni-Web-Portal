import Nav from "../nav/Nav";
import SideNav from "../side_nav/SideNav";

const adminNavLinks = [
    "DashBoard",
    "Survey",
    "Post",
    "Activity Log",
    "Alumni Records",
    "Account",
];

const AdminLayout = () => {
    return (
        <>
            <Nav backgroundColor={"bg-grey"} />
            <SideNav links={adminNavLinks} admin />
            {/*make this a nav that accepts list of links and img */}
            <Main>{children}</Main>
        </>
    );
};

export default AdminLayout;
