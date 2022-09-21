import React from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="app__about-content">
        <div className="app__about-text">
          <h2 className="head-text">About Me</h2>
          <p className="p-text text-center">
            I am a Full-Stack Web Developer with two years of experience in designing and developing responsive,
            user-friendly website applications.
          </p>
          <p className="p-text text-center">
            I enjoy creating things live on the internet, whether that be a frontend or full-stack application. My goal
            is to always build outstanding, reliable products in a way that represents my clients' brand, and appeals to
            their target audience.
          </p>
        </div>
        <div className="app__about-img">
          <img src={images.profile} alt="about image" />
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__aboutbg");
