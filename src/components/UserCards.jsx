import "./UserCards.css";
import { Link } from "react-router-dom";

export default function UserCards({ allPosts }) {
  return (
    <div className="user-cards">
      {allPosts.map((user) => (
        <Link
          to={`/post/${user.id}`}
          key={user.id}
          className="user-cards__card-link"
        >
          <div className="user-cards__card">
            <img
              src={user.img}
              className="user-cards__card-avatar"
              alt={user.title}
            />
            <div className="user-cards__card-details">
              <h2 className="user-cards__card-title">{user.title}</h2>
              <p className="user-cards__card-date">{user.visitingDate}</p>
              <p className="user-cards__card-author">{user.author}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
