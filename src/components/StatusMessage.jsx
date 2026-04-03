import React from "react";

export default function StatusMessage({ term, loading, error, movies }) {
  if (loading) {
    return <h3 className="status-message">Loading...</h3>;
  }
  if (error) {
    return <h3 className="status-message">{error}</h3>;
  }
  if (term.length === 0) {
    return (
      <h3 className="status-message">
        Please enter a search term to find movies.
      </h3>
    );
  }
  if (movies.length === 0) {
    return (
      <h3 className="status-message">
        No movies found. Try a different search.
      </h3>
    );
  }
  return null;
}
