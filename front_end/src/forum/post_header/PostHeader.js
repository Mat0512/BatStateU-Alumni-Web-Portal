import "./PostStatus.css";

const PostHeader = (props) => {
    return (
        <div>
            <div className="user-profile">
                <img className="user-avatar" src="" alt="avatar" />
                <p className="username">{props.username}</p>
            </div>
            <p className="date">{props.datePosted || "no date"}</p>
        </div>
    );
};

export default PostHeader;
