import React from "react";
import background from "../img/background.JPG";
import Logo from "../img/logoadv.png";
import NavBar from "./NavBar";

const innerHtml = `  
<div id="bg"><div id="lottie-bg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080" preserveAspectRatio="xMidYMid slice" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_2"><rect width="1920" height="1080" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_2)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><rect width="1920" height="1080" fill="#ffffff"></rect></g><g style="mix-blend-mode: multiply; display: none;" transform="matrix(1,0,0,1,240,135)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,678.052001953125,340.7200012207031)"><path fill="rgb(255,137,175)" fill-opacity="1" d=" M-7.650000095367432,113.0999984741211 C-7.650000095367432,113.0999984741211 -57.349998474121094,113.0999984741211 -57.349998474121094,113.0999984741211 C-57.349998474121094,113.0999984741211 7.650000095367432,-113.0999984741211 7.650000095367432,-113.0999984741211 C7.650000095367432,-113.0999984741211 57.349998474121094,-113.0999984741211 57.349998474121094,-113.0999984741211 C57.349998474121094,-113.0999984741211 -7.650000095367432,113.0999984741211 -7.650000095367432,113.0999984741211z"></path></g></g><g style="mix-blend-mode: multiply; display: none;" transform="matrix(1,0,0,1,240,135)" opacity="0.9999980457649205"><g opacity="1" transform="matrix(1,0,0,1,762.2420043945312,340.7200012207031)"><path fill="rgb(0,105,255)" fill-opacity="1" d=" M7.650000095367432,113.0999984741211 C7.650000095367432,113.0999984741211 57.349998474121094,113.0999984741211 57.349998474121094,113.0999984741211 C57.349998474121094,113.0999984741211 -7.650000095367432,-113.0999984741211 -7.650000095367432,-113.0999984741211 C-7.650000095367432,-113.0999984741211 -57.349998474121094,-113.0999984741211 -57.349998474121094,-113.0999984741211 C-57.349998474121094,-113.0999984741211 7.650000095367432,113.0999984741211 7.650000095367432,113.0999984741211z"></path></g></g><g style="mix-blend-mode: multiply; display: none;" transform="matrix(1,0,0,1,240,135)" opacity="0.99999588688417"><g opacity="1" transform="matrix(1,0,0,1,749.52001953125,367.79998779296875)"><path fill="rgb(255,188,0)" fill-opacity="1" d=" M95.21292877197266,-24.8515625 C95.21292877197266,-24.8515625 109.84907531738281,24.84843635559082 109.84907531738281,24.84843635559082 C109.84907531738281,24.84843635559082 -111.23999786376953,24.850000381469727 -111.23999786376953,24.850000381469727 C-111.23999786376953,24.850000381469727 -96.95899963378906,-24.850000381469727 -96.95899963378906,-24.850000381469727 C-96.95899963378906,-24.850000381469727 95.21292877197266,-24.8515625 95.21292877197266,-24.8515625z"></path></g></g><g style="mix-blend-mode: multiply; display: block;" transform="matrix(1.9716042280197144,-1.0483204126358032,3.0883193016052246,5.808284759521484,-747.05029296875,-792.463134765625)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,678.052001953125,340.7200012207031)"><path fill="rgb(255,137,175)" fill-opacity="1" d=" M-7.650000095367432,113.0999984741211 C-7.650000095367432,113.0999984741211 -57.349998474121094,113.0999984741211 -57.349998474121094,113.0999984741211 C-57.349998474121094,113.0999984741211 7.650000095367432,-113.0999984741211 7.650000095367432,-113.0999984741211 C7.650000095367432,-113.0999984741211 57.349998474121094,-113.0999984741211 57.349998474121094,-113.0999984741211 C57.349998474121094,-113.0999984741211 -7.650000095367432,113.0999984741211 -7.650000095367432,113.0999984741211z"></path></g></g><g style="mix-blend-mode: multiply; display: block;" transform="matrix(1.6158820390701294,-1.5068341493606567,4.819845199584961,5.168652057647705,-1087.6689453125,-135.77078247070312)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,762.2420043945312,340.7200012207031)"><path fill="rgb(0,105,255)" fill-opacity="1" d=" M7.650000095367432,113.0999984741211 C7.650000095367432,113.0999984741211 57.349998474121094,113.0999984741211 57.349998474121094,113.0999984741211 C57.349998474121094,113.0999984741211 -7.650000095367432,-113.0999984741211 -7.650000095367432,-113.0999984741211 C-7.650000095367432,-113.0999984741211 -57.349998474121094,-113.0999984741211 -57.349998474121094,-113.0999984741211 C-57.349998474121094,-113.0999984741211 7.650000095367432,113.0999984741211 7.650000095367432,113.0999984741211z"></path></g></g><g style="mix-blend-mode: multiply; display: block;" transform="matrix(5.9794111251831055,-5.774249076843262,1.4472509622573853,1.4986724853515625,-3238.46728515625,4353.50341796875)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,749.52001953125,367.79998779296875)"><path fill="rgb(255,188,0)" fill-opacity="1" d=" M96.4209976196289,-24.850000381469727 C96.4209976196289,-24.850000381469727 111.23999786376953,24.850000381469727 111.23999786376953,24.850000381469727 C111.23999786376953,24.850000381469727 -111.23999786376953,24.850000381469727 -111.23999786376953,24.850000381469727 C-111.23999786376953,24.850000381469727 -96.95899963378906,-24.850000381469727 -96.95899963378906,-24.850000381469727 C-96.95899963378906,-24.850000381469727 96.4209976196289,-24.850000381469727 96.4209976196289,-24.850000381469727z"></path></g></g></g></svg></div></div>
`;

export default function () {
  return (
    <div style={{ minHeight: "100vh" }} id="main">
      <div dangerouslySetInnerHTML={{ __html: innerHtml }} />
      <div className="main-content">
        <div style={{ textAlign: "center" }}>
          <h1 className="display-1 bold">
            <strong>
              Your next<br></br> digital level.
            </strong>
          </h1>
          <br></br>
          <p className="lead">
            <strong>Growth marketing scales your business model.</strong>
          </p>
          <br></br>
          <a href="#service">
            <button type="button" className="btn btn-dark">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
/*
<div className="col-4">
          <img src={background} alt="background" style={headerImage}></img>
        </div>*/
