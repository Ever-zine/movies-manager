"use client";
import Link from "next/link";
import React from "react";
import ButtonResearchMovie from "../components/api/buttonResearchMovie";
import SearchMovieBar from "../components/api/searchMovieBar";

const ApiTest = () => {

    return (
        <>
            <h1>Test appels API</h1>
            <ButtonResearchMovie/>
            <SearchMovieBar/>
            <Link href="/">Home</Link>
        </>
    );
}

export default ApiTest;