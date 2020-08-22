import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import SieMatic from "./components/SieMatic";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ContactPopUp from "./components/ContactPopUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <SieMatic />
      <Contact />
      <ContactPopUp />
      <Footer />
    </div>
  );
}

export default App;
