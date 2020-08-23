import React from "react";

export default function Experts() {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>
          Over 25 experts for your digital<br></br> success.
        </h1>
        <p className="lead">
          We always see ourselves as part of our customers' team and go the
          extra mile together. With passion and passion<br></br> for
          entrepreneurship, innovation and digital marketing, together we will
          reach the next
          <br></br> digital level of your projects.
        </p>
      </div>
      <div className="row">
        <div class="col-5">
          <img
            src="https://www.advalyze.com/wp-content/uploads/2020/07/office-02.jpg"
            alt="founders"
          ></img>
          <div class="col-4">
            <img
              src="https://www.advalyze.com/wp-content/uploads/2020/07/office-03.jpg"
              alt="office"
            ></img>
          </div>
          <div className="col-2">
            <img
              src="https://www.advalyze.com/wp-content/uploads/2020/07/office-01.jpg"
              alt="office2"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="bd-example col-4">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://www.advalyze.com/wp-content/uploads/2020/07/name@2x.png"
                  className="d-block w-100"
                  alt="..."
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.advalyze.com/wp-content/uploads/2020/07/jan-q@2x.png"
                  className="d-block w-100"
                  alt="..."
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.advalyze.com/wp-content/uploads/2020/07/laura@2x.png"
                  className="d-block w-100"
                  alt="..."
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
