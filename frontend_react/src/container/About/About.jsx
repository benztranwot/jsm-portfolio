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
            I am a Fullstack Web Developer with two years of experience in developing outstanding, responsive,
            user-friendly web applications.
          </p>
          <p className="p-text text-center">
            I enjoy creating JAMstack websites with fast-loading static sites controlled by a Headless CMS. I love
            structure and order and I also stand for quality. I love spending time fixing little details and optimizing
            web apps.
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
