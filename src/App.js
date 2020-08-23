import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import SieMatic from "./components/SieMatic";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ContactPopUp from "./components/ContactPopUp";
import Clients from "./components/Clients";
import Why from "./components/Why";
import Testimonial from "./components/Testimonial";
import Experts from "./components/Experts";
import AppStyle from "./style/AppStyle.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Clients />
      <SieMatic />
      <Why />
      <Testimonial />
      <Experts />
      <Contact />
      <ContactPopUp />
      <Footer />
    </div>
  );
}

export default App;
