import React, { useEffect, useState } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from "./../../assets/reading-book.png";

function Navbar() {

  return (

    <div className='navbar'>
          <div>
            <Link to="/" className='navbar-brand '>
            <img src={logo} className='navbar-logo'/>
            {/* <img src={logo} className=''/> */}
            MPSC katta</Link>
          </div>
          <div className='navbar-links-container'>
            <Link to="/" className='navbar-link'>Home</Link>
            <Link to="/about" className='navbar-link'>About</Link>
            <Link to="/signup" className='navbar-link'>Signup</Link>
            <Link to='/login' className='navbar-link'>Login</Link>
          </div>

        
        </div>


  )
}

export default Navbar
