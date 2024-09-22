import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div>
          <ul>
            <li><Link to="/">Logo</Link></li>
          </ul>
          <p className='info'>Welcome to my site, see any movie detail you want</p>
        </div>
        <div>
          <h1>Shopping</h1>
          <ul className='lis'>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/title">Title</Link></li>
            <li><Link to="/description">Description</Link></li>
            <li><Link to="/author">Author</Link></li>
          </ul>
        </div>
        <div>
          <h2>Experience</h2>
          <ul className='lis'>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/payment">Payment</Link></li>
            <li><Link to="/return-policy">Return Policy</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <h2>NEWSLETTER</h2>
          <p className='lis'>Be the first to know about the new movie releases</p>
          <input type="email" id="email" name="email" placeholder='Enter Your Email' className='formx' />
        </div>
      </div>
    </>
  );
}

export default Footer;