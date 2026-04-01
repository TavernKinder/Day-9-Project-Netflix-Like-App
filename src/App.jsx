import React from 'react'
import useMovies from './components/hooks/useMovies';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieListComponents/MovieList';
import './App.css'

function App() {
  const { movies, loading, error } = useMovies('s', 'Batman');

  return (
    <>
      <SearchBar onSearch={(term) => useMovies('s', term)} />
      <MovieList movies={movies} loading={loading} error={error} />
    </>
  )
}

export default App
