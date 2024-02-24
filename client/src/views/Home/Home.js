import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import homeImg from "./../../assets/home-img.jpg";
import children from "./../../assets/childrens.jpg";

function Home() 
{

  return (
    <>
    <Navbar/>
    <div className='homepage-img'>
        <h1 className='text-center title-home'>MPSC katta</h1>
      </div>

      <div className='d-flex justify-content-around mt-5'>
        <p>Kids</p>
        <p>Primitvie</p>
        <p>Comedy</p>
        <p>Romantic</p>
        <p>Horror</p>
      </div>

      <div className='d-flex justify-content-around'>
        <div className='category'>
          <img src={children} className='category-img-1'/>
        </div>
        <div className='category'></div>
        <div className='category'></div>
        <div className='category'></div>
        <div className='category'></div>
      </div>
      

    </>
  )
}

export default Home