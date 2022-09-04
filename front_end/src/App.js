import Nav from "./nav/Nav.js";
import SideNav from "./side_nav/SideNav.js";
import Main from "./main/Main.js";
import Footer from "./footer/Footer.js";
import Announcements from "./announcements/Announcements.js";
import Forum from "./forum/forum/Forum.js";
import Discussion from "./forum/post/Post.js";
import Profile from "./profile/Profile.js";
import Post from "./forum/post/Post";
import post from "./dummy_data/postData";
import { Routes, Route } from "react-router-dom";
import AlumniLayout from "./layout/AlumniLayout.js";

function App() {
    return (
        <div className="w-full h-screen">
            {/* <Nav />
            <SideNav />
            <Main>
                <Routes>
                    <Route path="/announcements" element={<Announcements />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/forum" element={<Post post={post[0]} />} />
                </Routes>
            </Main>
            <Footer /> */}
            <AlumniLayout>
                <Routes>
                    <Route path="/announcements" element={<Announcements />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/forum" element={<Post post={post[0]} />} />
                </Routes>
            </AlumniLayout>
        </div>
    );
}

export default App;
