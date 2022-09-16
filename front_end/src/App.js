import { Routes, Route, Outlet } from "react-router-dom";
import { AlumniPage } from "./alumni/AlumniPage";
import Announcements from "./announcements/Announcements";
import Profile from "./profile/Profile";
import { Login } from "./login/Login";
import { Signup } from "./signup/Signup";
import { EditProfile } from "./profile/EditProfile";

function App() {
    return (
        <div className="w-full h-screen">
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Login />} />
                    <Route path="auth/admin" element={<Login admin />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>
                <Route path="alumni" element={<AlumniPage />}>
                    <Route index element={<Announcements />} />
                    <Route path="account" element={<Profile />} />
                    <Route path="edit-profile" element={<EditProfile />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
