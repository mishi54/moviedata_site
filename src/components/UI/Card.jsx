import React from 'react';
import '../../../style/card.css';
const Card = ({ curElem }) => {
    const { Title, Year, Type, Poster, imdbID } = curElem || {};

    return (
        <li className="hero-container">
            <div className="main-container">
                <div className="poster-container">
                    {Poster ? (
                        <img src={Poster} className="poster" alt={imdbID} />
                    ) : (
                        <p>No image available</p>
                    )}
                </div>
                <div className="ticket-container">
                    <div className="ticket__content">
                        <div className='para'>
                        <h1>{Title || 'Unknown Title'}</h1>
                        <h2>{Year || 'Unknown Year'}</h2>
                        </div>
                        <button className='ticket__buy-btn'>Watch Now</button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Card;
