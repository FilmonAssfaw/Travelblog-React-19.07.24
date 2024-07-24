import UserCards from "./UserCards";
import Map from "./Map";
import "./DashBoard.css";
import { useState } from "react";
import { posts } from "../data/data.js";

export default function DashBoard() {
  const [allPosts, setallPosts] = useState(posts);

  return (
    <div className="DashBoard__Container">
      <UserCards allPosts={allPosts} />
      <Map />
    </div>
  );
}
