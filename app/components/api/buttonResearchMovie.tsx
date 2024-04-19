import React from "react";

const ButtonResearchMovie = () => {

    const url = 'https://api.themoviedb.org/3/search/movie?query=300&include_adult=false&language=fr-FR&page=1&api_key=eefc930faae17b67d376a80b08be54ef';
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eefc930faae17b67d376a80b08be54ef'
      }
    };

    const handleClick = async () => {

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
    };

    return (
        <button onClick={handleClick}>Appel recherche film 300</button>
    );
};

export default ButtonResearchMovie;

// export default async function ButtonResearchMovie() {

//     const response = await fetch("https://api.themoviedb.org/3/search/movie?query=300&language=fr-FR", {
//         headers: {
//             'Authorization': 'Bearer eefc930faae17b67d376a80b08be54ef'
//         }
//     });

//     const result = () => {
//         console.log("oe");
//     }

//     return (
//         <button onClick={result}>Appel recherche film 300</button>
//     );
// }