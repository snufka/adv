import React from "react";

import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import SieMatic from "./components/SieMatic";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Why from "./components/Why";
import Testimonial from "./components/Testimonial";
import Experts from "./components/Experts";
//import ActiveCampForm from "./components/ActiveCampForm";
//import Active2 from "./components/Active2";
//import ActivaCampaignModal from "./components/ActiveCampaignModal";
import "./style/AppStyle.css";
import ActiveCampaignModal from "./components/ActiveCampaignModal";

function App() {
  return (
    <div>
      <NavBar />
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
