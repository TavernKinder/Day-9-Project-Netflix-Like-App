import React from 'react';

export default function StatusMessage({ loading, error, movies }) {
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }
    if (movies.length === 0) {
        return <p>No movies found. Try a different search.</p>;
    }
    return null;
} 

//this looks good to me