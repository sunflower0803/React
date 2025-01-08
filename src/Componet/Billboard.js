import React from "react";

function Billboard() {
  return (
    <section
      id="billboard"
      className="position-relative overflow-hidden bg-light-blue"
    >
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className="display-2 text-uppercase text-dark pb-5">
                      Your Products Are Great.
                    </h1>
                    <a
                      href="index.html"
                      className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                    >
                      Shop Product
                    </a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder">
                    <img
                      src="images/banner-image.png"
                      alt="banner"
                      className="d-block w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Slide */}
          <div className="carousel-item">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className="display-2 text-uppercase text-dark pb-5">
                      Technology Hack You Won't Get
                    </h1>
                    <a
                      href="index.html"
                      className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                    >
                      Shop Product
                    </a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder">
                    <img
                      src="images/banner-image.png"
                      alt="banner"
                      className="d-block w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Billboard;
