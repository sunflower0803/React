import React, { useState, useEffect } from 'react';

function SmartWatches() {
  const [products, setProducts] = useState([]);  // Store fetched smartwatch data
  const [loading, setLoading] = useState(true);   // Manage loading state

  // Fetch data from the smartwatches API when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/smartwatches')  // Fetch from the new smartwatches API
      .then(response => response.json())
      .then(data => {
        setProducts(data);  // Set the fetched data to state
        setLoading(false);   // Set loading to false after fetching
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);  // Empty dependency array ensures the fetch happens once when the component mounts

  return (
    <section id="smart-watches" className="product-store padding-large position-relative">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Smart Watches</h2>
            <div className="btn-right">
              <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
            </div>
          </div>

          <div className="swiper product-watch-swiper">
            <div className="swiper-wrapper">
              {/* Show loading message while the data is being fetched */}
              {loading ? (
                <div className="loading">Loading products...</div>
              ) : (
                products.map(product => (
                  <div key={product.id} className="swiper-slide">
                    <div className="product-card position-relative">
                      <div className="image-holder">
                        <img src={product.imgSrc} alt={product.name} className="img-fluid" />
                      </div>
                      <div className="cart-concern position-absolute">
                        <div className="cart-button d-flex">
                          <a href="#" className="btn btn-medium btn-black">
                            Add to Cart
                            <svg className="cart-outline">
                              <use xlinkHref="#cart-outline" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                        <h3 className="card-title text-uppercase">
                          <a href="#">{product.name}</a>
                        </h3>
                        <span className="item-price text-primary">{product.price}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center" />
    </section>
  );
}

export default SmartWatches;
