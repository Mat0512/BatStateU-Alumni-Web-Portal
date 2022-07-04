import "./PostHeader.css";
import fakeAvatar from "../../assets/avatar_placeholder.svg";

const PostHeader = (props) => {
    return (
        <div className="post-header">
            <img className="user-avatar" src={fakeAvatar} alt="avatar" />
            <p>
                <span className="username">{props.username}</span> &#183;{" "}
                {props.datePosted || "no date"}
            </p>
        </div>
    );
};

export default PostHeader;
