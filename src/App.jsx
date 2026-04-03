import React, { useState } from "react";
import useMovies from "./components/hooks/useMovies";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieListComponents/MovieList";
import StatusMessage from "./components/StatusMessage";
import "./App.css";

function App() {
  const [submittedTerm, setSubmittedTerm] = useState("");
  const { movies, loading, error } = useMovies("s", submittedTerm);

  const handleSearchSubmit = (term) => {
    setSubmittedTerm(term);
  };

  return (
    <div className="app-container">
      <SearchBar onSubmitSearch={handleSearchSubmit} />
      <StatusMessage
        term={submittedTerm}
        loading={loading}
        error={error}
        movies={movies}
      />
      <MovieList movies={movies} loading={loading} error={error} />
    </div>
  );
}

export default App;
