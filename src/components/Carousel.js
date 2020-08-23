import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function Carousel() {
  const carouselStyle = { backgroundColor: "white", textAlign: "center" };
  return (
    <>
      <AwesomeSlider>
        <div style={carouselStyle}>
          <img
            src="https://www.advalyze.com/wp-content/uploads/2020/07/name@2x.png"
            alt="..."
          />
          <p>
            "I appreciate the respectful cooperation and that every opinion
            counts - regardless of whether you are a working student or a
            managing director."
          </p>
          <br></br>
          <p>Wiebke Schmidt, HR manager</p>
        </div>
        <div style={carouselStyle}>
          <img
            src="https://www.advalyze.com/wp-content/uploads/2020/07/jan-q@2x.png"
            alt="Jan"
          />
          <p>
            "I appreciate the respectful cooperation and that every opinion
            counts - regardless of whether you are a working student or a
            managing director."
          </p>
          <br></br>
          <p>Jan Quast, Senior Consultant</p>
        </div>
        <div style={carouselStyle}>
          <img
            src="https://www.advalyze.com/wp-content/uploads/2020/07/laura@2x.png"
            alt="Laura"
          />
          <p>
            "At Advalyze, origin, age and gender are irrelevant - what really
            counts are skills and personality."
          </p>
          <br></br>
          <p>Laura Raimondi, Management Assistant</p>
        </div>
      </AwesomeSlider>
    </>
  );
}
