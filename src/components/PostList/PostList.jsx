import PostItem from "../PostItem/PostItem";
import { posts } from "../../data/posts";
import "./PostList.css";

const PostList = () => {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
};

export default PostList;
