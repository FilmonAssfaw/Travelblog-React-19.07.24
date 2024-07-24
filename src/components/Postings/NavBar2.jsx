import { NavLink } from "react-router-dom";
import "./NavBar2.css";

export default function NavBar2() {
  return (
    <nav className="NavBar">
      <NavLink to="postings">All Posts</NavLink>
      <NavLink to="postings/add-post">Add Post</NavLink>
    </nav>
  );
}
