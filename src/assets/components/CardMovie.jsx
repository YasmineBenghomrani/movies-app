import React from "react";

export default function CardMovie({ media }) {
  return (
    <div className="media-card">
      <img src={"https://image.tmdb.org/t/p/original" + media.poster_path} />
      <h3>{media.title}</h3>
      <p>{media.overview}</p>
    </div>
  );
}
