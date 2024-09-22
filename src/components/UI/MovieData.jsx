import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../UI/Card';

const MovieData = () => {
    const movieData = useLoaderData();
    if (!movieData ) {
        return <p>Loading...</p>; 
    }

    return (
        <>
            <ul className='gridx'>
                {movieData&&
                movieData.map((curElem) => {
                    return <Card key={curElem.imdbID} curElem={curElem} />;
                   
                })}
            </ul>
        </>
    );
};

export default MovieData;

