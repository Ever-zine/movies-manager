import React from "react";
import ButtonOpenPopupDetailMovie from "./popupDetailMovie";

const MovieCard = ({ movie }: { movie: any }) => {
    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
            alt="Movie poster unavalible"/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {movie.title}
                </h5>
                <h5 className="mb-2 text-sm tracking-tight text-gray-500">
                    {movie.release_date}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {movie.overview.length > 150 ? movie.overview.substring(0, 150) + "..." : movie.overview}
                </p>
            </div>
            <ButtonOpenPopupDetailMovie movie={movie}/>
        </div>
    );
}

export default MovieCard;