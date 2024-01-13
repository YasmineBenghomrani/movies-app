import React from "react";

export default function CardSwiper() {
  return (
    <div className="movie-card">
      <img src="https://rhodycigar.com/wp-content/uploads/2023/03/onesheet.jpg" />
      <div className="content-card">
        <div className="header">
          <h3>titre</h3>
          <p className="categorie">Catégorie</p>
        </div>
        <div className="footer">
          <p>description</p>
          <input type="button" value="Voir plus" />
        </div>
      </div>
    </div>
  );
}
