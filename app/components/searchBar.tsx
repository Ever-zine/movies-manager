import React, { useState } from "react";
import FetchMovieFromApi from "../utils/fetchMovieFromApi";

const SearchBar = ({ onDataReceived }: { onDataReceived: (data: any) => void }) => {
    // Récupération de la valeur de l'input
    const [query, setQuery] = useState('');

    // Gestion de la recherche
    const handleSearch = async () => {
        try {
            const data = await FetchMovieFromApi(query);
            // Passage des données au parent
            onDataReceived(data);
        } catch (error : any) {
            console.error('Error fetching data from API:', error);
        }
    };

    return (
        <div>
            <input
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;