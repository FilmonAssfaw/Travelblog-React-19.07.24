import { useState } from "react";
import "./CountryCard.css";

export default function Japan() {
  return (
    <div className="CountryCard">
      <img src="https://picsum.photos/id/1/200/300" alt="Card Image" />
      <h2>Japan</h2>
      <p>Population: 126.3 million</p>
      <p>Capital: Tokyo</p>
      <p>
        Known for its traditional arts, tea ceremonies, calligraphy, and flower
        arranging.
      </p>
      <button>Show more</button>
    </div>
  );
}
