import React from "react";

import { About, Service, Contact, Header, Skills, Testimonial, Work } from "./container";
import { Navbar, Footer } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Service />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
