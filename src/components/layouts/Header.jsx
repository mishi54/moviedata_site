import React from 'react';
import { Link } from 'react-router-dom';
import '../../../style/site.css';

export const Header = () => {
  return (
    <>
      <div className='credentials'>
        <p>Get 30% off now</p>
        <div className='auth'>
          <ul>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
      <div className='menu'>
        <div>
          <ul>
            <li><Link to="/">Logo</Link></li>
          </ul>
        </div>
        <div className='menu-link'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
