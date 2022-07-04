import "./Post.css";
import PostHeader from "../post_header/PostHeader";
import PostStatus from "../post_status/PostStatus";
import Comments from "../comment/Comments";

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
    console.log(post);

    return (
        <div className="post-card">
            <div className="post">
                <PostHeader username={post.author} datePosted={""} />
                <div className="post-body">{post.body}</div>
                <PostStatus
                    upvoteCount={post.upvoteCount}
                    replyCount={post.replyCount}
                />
            </div>

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
