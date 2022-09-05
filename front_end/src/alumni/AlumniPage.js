import AlumniLayout from "../layout/AlumniLayout";
// import Announcements from "../announcements/Announcements";
// import Profile from "../profile/Profile.js";
import { Outlet } from "react-router-dom";

const AlumniPage = () => {
    return (
        <>
            <AlumniLayout>
                <Outlet />
            </AlumniLayout>
        </>
    );
};

export { AlumniPage };
