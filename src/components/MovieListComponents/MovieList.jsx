import React from "react";
import MovieListCard from "./MovieListCard";

export default function MovieList({ movies }) {
  const uniqueMovies = movies.filter(
    (movie, index, self) =>
      index === self.findIndex((m) => m.imdbID === movie.imdbID),
  );
  return (
    <div className="movie-list">
      {uniqueMovies.map((movie) => (
        <MovieListCard
          key={movie.imdbID}
          isABook={true}
          movie={movie}
        ></MovieListCard>
      ))}
    </div>
  );
}
