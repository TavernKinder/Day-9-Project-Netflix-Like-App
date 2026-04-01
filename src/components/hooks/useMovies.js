import { useState, useEffect } from "react";

export default function useMovies(searchtype, searchTerm) {
const apiKey = "e5bc556a" ;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    useEffect(() => {
    if (!searchTerm) {
        setMovies([]);
        return;
    }
    setLoading(true);
    setError(null);
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&${searchtype}=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
            setMovies([]);
            setError(data.Error);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch movies");
        setLoading(false);
      });
    }, [searchtype, searchTerm]);
    return { movies, loading, error };
}