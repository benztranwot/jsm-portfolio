import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const today = getDateTime();

  function getDateTime() {
    const today = new Date();
    const todayDate = today.getUTCDate() < 10 ? `0${today.getUTCDate()}` : today.getUTCDate();
    const todayMonth = today.getUTCMonth() < 9 ? `0${today.getUTCMonth() + 1}` : today.getUTCMonth() + 1;
    const todayYear = today.getUTCFullYear();
    const thisHour = today.getUTCHours() < 10 ? `0${today.getUTCHours()}` : today.getUTCHours();
    const thisMinute = today.getUTCMinutes() < 10 ? `0${today.getUTCMinutes()}` : today.getUTCMinutes();
    const thisSecond = today.getUTCSeconds() < 10 ? `0${today.getUTCSeconds()}` : today.getUTCSeconds();
    const dateTime = `${todayDate}/${todayMonth}/${todayYear} ${thisHour}:${thisMinute}:${thisSecond}`;
    return dateTime;
  }

  function submitForm(e) {
    e.preventDefault();

    setSubmitted(true);

    const form = document.querySelector(".app__contact-form");
    const formData = new FormData(form);
    const url = "https://formsubmit.co/5f5f19063ba936a80c82dbd0b94b1526";

    fetch(url, {
      method: "POST",
      body: formData,
    });

    return false;
  }

  return (
    <>
      {getDateTime()}
      <h2 className="head-text">Drop Me A Message</h2>

      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">
            benzdev0305@gmail.com
          </a>
        </div>
      </div>

      {!submitted && (
        <form className="app__contact-form app__flex" onSubmit={submitForm}>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" required />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" required />
          </div>
          <div>
            <textarea className="p-text" placeholder="Your Message" name="message" required />
          </div>
          <input type="hidden" name="_subject" value={today}></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <button type="submit" className="p-text mt-4">
            Send Message
          </button>
        </form>
      )}

      {submitted && (
        <div>
          <h3 className="head-text">Thank you</h3>
          <h3 className="p-text reply-text">I'll get back to you as soon as possible!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Contact, "app__contact"), "contact", "app__whitebg");
