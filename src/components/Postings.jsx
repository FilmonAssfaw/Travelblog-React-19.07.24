import { useState, useEffect } from "react";
import { uid } from "uid";
import { Routes, Route } from "react-router-dom";
import Header from "./Postings/Header";
import AllPosts from "./Postings/pages/AllPosts";
import AddPost from "./Postings/pages/AddPost";
import PostDetails from "./Postings/pages/PostDetails";
import NavBar2 from "./Postings/NavBar2";
import "../App.css";
import { fetchAllPosts, sendAddPost, sendPostUpdate } from "./api";

export default function Postings() {
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    const response = await fetchAllPosts();
    const data = await response.json();
    setPosts(data);
  }

  async function addPost(newItem) {
    setPosts([...posts, { id: uid(), ...newItem }]);
    await sendAddPost(newItem);
    loadPosts();
  }

  async function updatePost(id, updatedItem) {
    setPosts(
      posts.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
    await sendPostUpdate(id, updatedItem);
    loadPosts();
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar2 />
      <Routes>
        <Route
          path="/"
          element={<AllPosts posts={posts} updatePost={updatePost} />}
        />
        <Route path="add-post" element={<AddPost addPost={addPost} />} />
        <Route
          path="post/:id"
          element={<PostDetails posts={posts} updatePost={updatePost} />}
        />
      </Routes>
    </div>
  );
}
