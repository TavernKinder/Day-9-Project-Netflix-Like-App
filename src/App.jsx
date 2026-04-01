import React, { useState } from "react";
import useMovies from "./components/hooks/useMovies";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieListComponents/MovieList";
import StatusMessage from "./components/StatusMessage";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); //Can put in search bar
  const [submittedTerm, setSubmittedTerm] = useState(""); //can put in search bar and submit to trigger useMovies
  const { movies, loading, error } = useMovies("s", submittedTerm);

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmittedTerm(searchTerm);
  };

  return (
    <div className="app-container">
      <SearchBar
        searchTerm={searchTerm}
        onSearch={handleSearch}
        setSearchTerm={setSearchTerm}
      />
      <StatusMessage loading={loading} error={error} movies={movies} />
      <MovieList movies={movies} loading={loading} error={error} />
    </div>
  );
}

export default App;
