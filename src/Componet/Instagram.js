function Instagram() {
  return (
    <section
      id="instagram"
      className="padding-large overflow-hidden no-padding-top"
    >
      <div className="container">
        <div className="row">
          <div className="display-header text-uppercase text-dark text-center pb-3">
            <h2 className="display-7">Shop Our Insta</h2>
          </div>
          <div className="d-flex flex-wrap">
            <figure className="instagram-item pe-2">
              <a href="#" className="image-link position-relative">
                <img
                  src="images/insta-item1.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    <use xlinkHref="#instagram" />
                  </svg>
                </div>
              </a>
            </figure>
            <figure className="instagram-item pe-2">
              <a href="#" className="image-link position-relative">
                <img
                  src="images/insta-item2.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    <use xlinkHref="#instagram" />
                  </svg>
                </div>
              </a>
            </figure>
            <figure className="instagram-item pe-2">
              <a href="#" className="image-link position-relative">
                <img
                  src="images/insta-item3.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    <use xlinkHref="#instagram" />
                  </svg>
                </div>
              </a>
            </figure>
            <figure className="instagram-item pe-2">
              <a href="#" className="image-link position-relative">
                <img
                  src="images/insta-item4.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    <use xlinkHref="#instagram" />
                  </svg>
                </div>
              </a>
            </figure>
            <figure className="instagram-item pe-2">
              <a href="#" className="image-link position-relative">
                <img
                  src="images/insta-item5.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    <use xlinkHref="#instagram" />
                  </svg>
                </div>
              </a>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instagram;
