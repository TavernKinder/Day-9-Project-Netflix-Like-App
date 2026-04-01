import React from "react";

export default function MovieListCard({ movie }) {
  console.log(movie);
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
    </div>
  );
}
