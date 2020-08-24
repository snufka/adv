import React from "react";

import Main from "./components/Main";
import Services from "./components/Services";
import SieMatic from "./components/SieMatic";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Why from "./components/Why";
import Testimonial from "./components/Testimonial";
import Experts from "./components/Experts";
import "./style/AppStyle.css";

function App() {
  return (
    <div>
      <Main />
      <Services />
      <Clients />
      <SieMatic />
      <Why />
      <Testimonial />
      <Experts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
