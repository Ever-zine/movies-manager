const FetchMovieFromApi = async (query : string) => {
    try {

        // Définition de la requête
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json'
            }
        };
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=fr-FR&page=1&api_key=${process.env.API_KEY}`;

        // Appel de la requête
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Si ça a fonctionné, on récupère les données
        const data = await response.json();
        return data;

    }
    catch (error : any) {
        throw new Error(`Error fetching data from API: ${error.message}`);
    }
}

export default FetchMovieFromApi;