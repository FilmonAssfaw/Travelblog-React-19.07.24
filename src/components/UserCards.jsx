import { useState } from "react";
import "./UserCards.css";

export default function UserCards({ users }) {
  const [showMore, setShowMore] = useState({});

  const handleShowMore = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <div className="user-cards">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <img
            src={user.img}
            alt={`${user.name} avatar`}
            className="card-avatar"
          />
          <div className="card-details">
            <h2>{user.name}</h2>
            <p>{user.description}</p>
            {showMore[user.id] && (
              <p className="additional-info">
                Additional information about {user.moreInfo}...
              </p>
            )}
          </div>
          <button
            className="card-button"
            onClick={() => handleShowMore(user.id)}
          >
            {showMore[user.id] ? "Show Less" : "View Details"}
          </button>
        </div>
      ))}
    </div>
  );
}
