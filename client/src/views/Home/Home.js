import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import homeImg from "./../../assets/home-img.jpg";
import children from "./../../assets/childrens.jpg";
import Footer from "../../components/Footer/Footer";
import Img1 from "./../../assets/Img1.jpg";
import Img2 from "./../../assets/Img2.jpg";
import Img3 from "./../../assets/Img3.jpg";
import category1 from "./../../assets/category-1.jpg";
import category4 from "./../../assets/category-4.jpg";
import category5 from "./../../assets/category-5.jpg";
import category3 from "./../../assets/category-3.webp";
import category2 from "./../../assets/category-2.png";
import BooksCard from "../../components/BooksCard/BooksCard";

function Home() {
  const [book, setBook] = useState([])

  const loadBooks = async ()=>{
    const response = await axios.get('')
  }
  
  return (
    <>
      <Navbar />
    
     <div id="carouselExampleIndicators" className="carousel slide ">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner normal-css">
        <div className="carousel-item active">
          <img src={Img1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={Img2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={Img3} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  
      <div className="d-flex justify-content-around mt-5 fw-bold ms-2">
        <p className="">UPSC | MPSC Books</p>
        <p>Police Bharti Books</p>
        <p>Parikrama Magazine</p>
        <p>Chalu Ghadamodi 2024</p>
        <p>Vidyapith Publication </p>
      </div>

      <div className="d-flex justify-content-around">
        <div className="category">
          <img src={category1} className="category-img-1" />
        </div>
        <div className="category">
        <img src={category2} className="category-img-1" />
        </div>
        <div className="category">
        <img src={category3} className="category-img-1" />
        </div>
        <div className="category">
        <img src={category4} className="category-img-1" />
        </div>
        <div className="category">
        <img src={category5} className="category-img-1" />
        </div>
      </div>


      <BooksCard 
      cover={cover}
      price={price}
      title={title}/>
    </>
  );
}

export default Home;
