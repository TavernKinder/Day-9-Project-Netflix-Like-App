import React, { useState } from 'react'
import useMovies from './components/hooks/useMovies';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieListComponents/MovieList';
import './App.css'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState('');
  const { movies, loading, error } = useMovies('s', submittedTerm);

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmittedTerm(searchTerm);
  };

  return (
    <>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} setSearchTerm={setSearchTerm} />
      <MovieList movies={movies} loading={loading} error={error} />
    </>
  );
}

export default App
