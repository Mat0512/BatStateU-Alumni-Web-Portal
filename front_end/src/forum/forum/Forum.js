import "./Forum.css";
import "../../search_bar/SearchBar.js";
import SearchBar from "../../search_bar/SearchBar.js";
import viewIcon from "../../assets/icons/eye.svg";
import commentIcon from "../../assets/icons/comments.svg";

const PostItem = () => {
    return (
        <div className="discussion-card">
            <div className="discussion-item-heading">
                <div className>
                    <div className="user-profile">
                        <img className="user-avatar" src="" alt="avatar" />
                        <p className="username">Mathew Mendoza</p>
                    </div>
                    <p className="date">May 16, 2022</p>
                </div>
                <div className="discussion-stats">
                    <div className="stats">
                        <img
                            className="stats-icon"
                            src={viewIcon}
                            alt="eye icon"
                        />
                        <p className="stats-value">16 Views</p>
                    </div>
                    <div className="stats">
                        <img
                            className="stats-icon"
                            src={commentIcon}
                            alt="comment icon"
                        />
                        <p className="stats-value">16 comments</p>
                    </div>
                </div>
            </div>

            <p className="topic">
                Hello pips, what features can you recommend for the forum?
            </p>
            <a className="link" href="#">
                View More &#8594;
            </a>
        </div>
    );
};

const Forum = () => {
    return (
        <div>
            <SearchBar />
            <ul className="discussion-list">
                <li>
                    <PostItem />
                </li>
                <li>
                    <PostItem />
                </li>
                <li>
                    <PostItem />
                </li>
            </ul>
        </div>
    );
};

export default Forum;
