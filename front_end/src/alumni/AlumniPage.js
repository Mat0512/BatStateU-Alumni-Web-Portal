import AlumniLayout from "../layout/AlumniLayout";
// import Announcements from "../announcements/Announcements";
// import Profile from "../profile/Profile.js";
import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const AlumniPage = () => {
    const { auth } = useContext(AuthContext);
    console.log("auth: ", auth);
    return (
        <>
            {auth.token ? (
                <AlumniLayout>
                    <Outlet />
                </AlumniLayout>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
};

export { AlumniPage };
