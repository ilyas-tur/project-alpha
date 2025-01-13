import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./PostItem.css";

const PostItem = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="post-item">
      <div className="header">
        <img
          className="profile-picture"
          src={post.profilePicture}
          alt={post.author}
        />
        <div className="author">{post.author}</div>
      </div>
      <img className="post-image" src={post.imageUrl} alt="Post content" />
      <div className="content">
        <p>
          <span className="author">{post.author}</span> {post.text}
        </p>
        <div className="tags">
          {post.tags.map((tag, index) => (
            <a key={index} href={`#${tag}`} className="tag">
              #{tag}
            </a>
          ))}
        </div>
      </div>
      <div className="footer">
        <button className="like-button" onClick={toggleLike}>
          {liked ? <FaHeart /> : <FaRegHeart />} Like
        </button>
        <button className="share-button">Share</button>
      </div>
    </div>
  );
};

export default PostItem;
