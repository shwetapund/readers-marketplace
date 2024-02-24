import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import homeImg from "./../../assets/home-img.jpg";

function Home() 
{

  return (
    <>
    <Navbar/>
    <div className='homepage-img'>
        <h1 className='text-center title'>Books Gallary</h1>
      </div>

    </>
  )
}

export default Home