import React from "react";

export default function MovieListCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-card-poster">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
      </div>
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.Title}</h3>
        <p className="movie-card-year">{movie.Year}</p>
      </div>
    </div>
  );
}
