import Post from "../Post";
import { useParams } from "react-router-dom";

export default function PostDetails({ posts, updatePost }) {
  const { id } = useParams();

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <p>Loading</p>;
  }

  return (
    <Post
      id={post.id}
      title={post.title}
      author={post.author}
      date={post.date}
      summary={post.summary}
      votes={post.votes}
      updatePost={updatePost}
    />
  );
}
