import "./Post.css";
import PostHeader from "../post_header/PostHeader";
import PostStatus from "../post_status/PostStatus";

//create a resusable component with userprofile, stats, and the text

const Comments = ({ comment }) => {
    const nestedComments = (comment.children || []).map((comment) => {
        return <Comments comment={comment} />;
    });

    return (
        <div>
            <PostHeader username={comment.author} datePosted={"MM/DD/YYYY"} />
            <div>{comment.text}</div>
            <PostStatus
                upvoteCount={comment.upvoteCount}
                replyCount={comment.replyCount}
            />
            <div style={{ marginLeft: "25px", marginTop: "10px" }}>
                {nestedComments}
            </div>
        </div>
    );
};

export default Comments;
