import { Routes, Route } from "react-router-dom";
import { AlumniPage } from "./alumni/AlumniPage";
import Announcements from "./announcements/Announcements";
import Profile from "./profile/Profile";
import ClientLogin from "./client_login/ClientLogin";

function App() {
    return (
        <div className="w-full h-screen">
            <Routes>
                <Route path="login" element={<ClientLogin />} />
                <Route path="alumni" element={<AlumniPage />}>
                    <Route index element={<Announcements />} />
                    <Route path="account" element={<Profile />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
