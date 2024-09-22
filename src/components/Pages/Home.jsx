import React from 'react';
import '../../../style/Home.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/movies');
  };

  return (
    <div className="home-container">
      <figure>
        <img src='../../../public/movie.jpg' alt="Movie" className="movie-image" />
        <button className="explore-button" onClick={handleExploreClick}>Explore</button>
      </figure>
    </div>
  );
};
