/* eslint-disable no-unused-vars */

// ABOUT COMPONENT


import React from "react";
import aboutimg from "../assets/aboutimg.png";
import AboutBackgroundImage from "../assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
// pat-na1-d84c8884-554b-4f26-add4-664b1f94f0e9
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackgroundImage} alt=""  />
      </div>
      <div className="about-section-image-container">
        <img src={aboutimg} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video about Food hunger in India
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;