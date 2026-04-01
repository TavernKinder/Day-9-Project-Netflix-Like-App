import React from 'react';
import useMovies from '../hooks/useMovies';

export default function MovieListCard(movie ) {
    return (
        <div className="movie-card">
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
        </div>
    );
}