import "./PostStatus.css";
import upvoteLogo from "../../assets/icons/level-up.svg";
import replyLogo from "../../assets/icons/reply-all.svg";

const PostStatus = (props) => {
    return (
        <div className="status-wrapper">
            <div className="status">
                <img
                    className="status-logo"
                    src={upvoteLogo}
                    alt="upvote logo"
                />
                <p>{props.upvoteCount} Upvote</p>
            </div>
            <div className="status">
                <img className="status-logo" src={replyLogo} alt="reply logo" />
                <p>{props.replyCount} Reply</p>
            </div>
        </div>
    );
};

export default PostStatus;
