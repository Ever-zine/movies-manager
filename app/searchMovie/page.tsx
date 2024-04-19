"use client";
import React, { useState } from "react";
import SearchBar from "../components/searchBar";
import MovieCard from "../components/movieCard";

const SearchMoviePage = () => {
    // Récupération du résultat de la recherche et du chargement
    const [searchResults, setSearchResults] = useState(null);
    const [loading, setLoading] = useState(false);

    // Affichage des résultats de la recherche
    const handleDataReceived = (data : any) => {
        setSearchResults(data);
    }

    return (
            <>
                <h1>Search movie</h1>
                <SearchBar onDataReceived={handleDataReceived} loading={loading} setLoading={setLoading}/>
                {loading && <p>Loading...</p>}
                {searchResults && (
                    <div className="grid grid-cols-2 justify-items-center gap-5">
                        {searchResults.results.map((movie : any) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                )}
            </>
    );
}

export default SearchMoviePage;