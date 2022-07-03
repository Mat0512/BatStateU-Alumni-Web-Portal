import "./Discussion.css";
import PostHeader from "../post_header/PostHeader";
import PostStatus from "../post_status/PostStatus";
import Comments from "./Comments";

const CommentInput = () => {
    return (
        <div className="comment-input-container">
            <input
                className="comment-input"
                type="text"
                placeholder="Add Comment"
                //add event for input
            />
        </div>
    );
};

const Post = ({ post }) => {
    return (
        <div className="post-card">
            <PostHeader username={post.author} datePosted={""} />
            <div>{post.text}</div>
            <PostStatus
                upvoteCount={post.upvoteCount}
                replyCount={post.replyCount}
            />

            <CommentInput />

            <p>Comments</p>
            <ul className="">
                {post.comments.map((comment) => {
                    return <Comments comment={comment} />;
                })}
            </ul>
        </div>
    );
};

export default Post;
