import React from "react"
import useMovies from "../hooks/useMovies"
import MovieListCard from "./MovieListCard"
import StatusMessage from "../StatusMessage"

export default function MovieList({ movies }) {
    const uniqueMovies = movies.filter((movie, index, self) =>
        index === self.findIndex(m => m.imdbID === movie.imdbID)
    );
    return (
        <div className="movie-list">
            {uniqueMovies.map(movie => (
                <MovieListCard key={movie.imdbID} {...movie} />
            ))}
        </div>
    );
}