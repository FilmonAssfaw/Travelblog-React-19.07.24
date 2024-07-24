import PostList from "../PostList";

export default function AllPosts({ posts, updatePost }) {
  return (
    <div>
      <h2>All Posts</h2>
      <PostList posts={posts} updatePost={updatePost} />
    </div>
  );
}
