import React from "react";
import "./index.css";

const MovieCard = ({ poster, title, year, rating }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />

      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">Release Year: {year}</p>
        <span className="movie-rating">⭐ {rating}</span>
      </div>
    </div>
  );
};

export default MovieCard;
