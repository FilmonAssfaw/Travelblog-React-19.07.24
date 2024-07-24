import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { posts } from "../data/data";
import "./PostDetails.css";

export default function PostDetails() {
  const { id } = useParams();

  const [allPosts, setAllPosts] = useState(posts);
  const [post, setPost] = useState(null);
  function getPost() {
    setPost(allPosts.find((post) => post.id === id));
  }

  useEffect(() => {
    getPost();
  }, []);

  if (!post) {
    <p>Loading</p>;
  }

  return (
    <div className="post-details">
      <Link to="/" className="back-button">
        Back to Dashboard
      </Link>
      <h1 className="post-details__title">Post Details</h1>
      <img className="post-details__image" src={post?.img} alt={post?.title} />
      <div className="post-details__meta">
        <h2 className="post-details__title">{post?.title}</h2>
        <span className="post-details__meta-item">{post?.visitingDate}</span>
        <span className="post-details__meta-item">{post?.author}</span>
      </div>
      <p className="post-details__description">{post?.description}</p>
      <p className="post-details__more-info">{post?.moreInfo}</p>
    </div>
  );
}
