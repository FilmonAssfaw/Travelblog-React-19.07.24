import React from "react";
import "./UserCards.css";

export default function UserCards({ users }) {
  return (
    <div className="user-cards">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <img
            src={user.avatar}
            alt={`${user.name} avatar`}
            className="card-avatar"
          />
          <div className="card-details">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
