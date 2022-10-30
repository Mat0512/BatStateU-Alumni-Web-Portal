import { Routes, Route, Outlet } from "react-router-dom";
import { AlumniPage } from "./alumni/AlumniPage";
import { AdminPage } from "./admin/AdminPage";
import Announcements from "./announcements/Announcements";
import Profile from "./profile/Profile";
import { Login } from "./login/Login";
import { Signup } from "./signup/Signup";
import { EditProfile } from "./profile/edit_form/EditProfile";
import { Playgorund } from "./Playground";
import { PersistLogin } from "./PersistsLogin";
import { Post } from "./post/Post";
import { ActivityLog } from "./activitylog/ActivityLog";
import { AlumniRecords } from "./alumniRecords/AlumniRecords";

function App() {
    //add a state that indicates either the user is log in or not to protect routes

    return (
        <div className="w-full h-screen">
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Login />} />
                    <Route path="admin/auth" element={<Login admin />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                    <Route path="playground" element={<Playgorund />} />
                </Route>
                <Route path="alumni" element={<PersistLogin />}>
                    {/*the authorization of routes are located on AlumniPage and AdminPage component*/}
                    <Route element={<AlumniPage />}>
                        <Route index element={<Announcements />} />
                        <Route path="account" element={<Profile />} />
                        <Route path="edit-profile" element={<EditProfile />} />
                    </Route>
                </Route>
                <Route path="admin" element={<PersistLogin admin={true} />}>
                    <Route element={<AdminPage />}>
                        <Route index path="account" element={<Profile />} />
                        <Route index path="post" element={<Post />} />
                        <Route
                            index
                            path="activitylog"
                            element={<ActivityLog />}
                        />
                        <Route
                            index
                            path="alumniRecords"
                            element={<AlumniRecords />}
                        />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
