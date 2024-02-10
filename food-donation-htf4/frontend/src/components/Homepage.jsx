/* eslint-disable no-unused-vars */

// HOMEPAGE COMPONENT CONSISTS OF HOME COMPONENT'S BODY



import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import homepageimg from '../assets/homepageimg.png'
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import {useNavigate} from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const navigatetoReg = async() => {
    navigate('/register')
  }
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Products Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
          Elevate your shopping experience with curated collections and seamless checkout on our cutting-edge ecommerce platform
          </p>
          <button className="secondary-button" onClick={navigatetoReg}>
            Register <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section" onClick={navigatetoReg}>
          <img src={homepageimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;