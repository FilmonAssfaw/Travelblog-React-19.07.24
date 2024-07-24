import "./PostList.css";
import { Link } from "react-router-dom";

export default function PostList({ posts }) {
  return (
    <ul className="PostList">
      {posts.toReversed().map((post) => (
        <li key={post.id} className="PostList-Item">
          <Link to={`/postings/post/${post.id}`}>
            <strong>{post.title}</strong> - by {post.author} ({post.votes}{" "}
            votes)
          </Link>
        </li>
      ))}
    </ul>
  );
}
