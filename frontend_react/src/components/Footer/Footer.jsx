import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { images } from "../../constants";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'references'] | order(order asc)";

    client.fetch(query).then((data) => setReferences(data));
  }, []);

  return (
    <footer className="app__footer app__darkbg">
      <div className="app__footer-return">
        <a href="#home">
          <IoIosArrowUp />
        </a>
      </div>
      <div className="app__footer-main">
        <div className="app__footer-connect">
          <div className="app__footer-logo">
            <img src={images.icon} alt="logo icon" />
          </div>
          <div className="app__footer-text">
            <h3>Let's keep in touch</h3>
            <p>Connect with me on any of these platforms</p>
            <div className="app__footer-icons">
              <a href="https://github.com/benztranwot" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/benz-tran" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="#contact">
                <AiFillMail />
              </a>
            </div>
          </div>
        </div>
        <div className="app__footer-list">
          <div className="app__footer-links">
            <h4>Links</h4>
            {["home", "about", "service", "work", "skill", "contact"].map((item, index) => (
              <a href={`#${item}`} key={item + index}>
                {item}
              </a>
            ))}
          </div>
          <div className="app__footer-ref">
            <h4>References</h4>
            {references.map((reference, index) => (
              <a href={reference.link} target="_blank" rel="noreferrer" key={reference.name + index}>
                {reference.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="app__footer-line"></div>
      <div className="app__footer-copyright">
        <p>
          &copy; 2022 Ben Tran. Built with{" "}
          <a
            href="https://github.com/benztranwot/jsm-portfolio"
            target="_blank"
            rel="noreferrer"
            className="app__footer-source"
          >
            React & Sanity
          </a>
        </p>
        <p>You are free to use almost everything except the image in the about section</p>
      </div>
    </footer>
  );
};

export default Footer;
