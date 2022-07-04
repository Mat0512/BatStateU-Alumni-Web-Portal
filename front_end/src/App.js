import "./App.css";
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

function App() {
    return (
        <div className="app-wrapper">
            <Nav />
            <SideNav />
            <div className="content-wrapper">
                <Main>
                    <Post post={post[0]} />
                </Main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
