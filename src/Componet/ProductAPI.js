import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";

function ProductAPI() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Use `addToCart` from the context

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="mobile-products"
      className="product-store position-relative padding-large no-padding-top"
    >
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">
              Mobile Products
            </h2>
            <div className="btn-right">
              <a
                href="shop.html"
                className="btn btn-medium btn-normal text-uppercase"
              >
                Go to Shop
              </a>
            </div>
          </div>
          <div className="swiper product-swiper">
            <div className="swiper-wrapper">
              {loading ? (
                <div className="loading">Loading products...</div>
              ) : (
                products.map((product) => (
                  <div key={product.id} className="swiper-slide">
                    <div className="product-card position-relative">
                      <div className="image-holder">
                        <img
                          src={product.imgSrc}
                          alt="product-item"
                          className="img-fluid"
                        />
                      </div>
                      <div className="cart-concern position-absolute">
                        <div className="cart-button d-flex">
                          <button
                            className="btn btn-medium btn-black"
                            onClick={() => addToCart(product)} // Updated to use `addToCart`
                          >
                            Add to Cart
                            <svg className="cart-outline">
                              <use xlinkHref="#cart-outline" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                        <h3 className="card-title text-uppercase">
                          <a href="#">{product.name}</a>
                        </h3>
                        <span className="item-price text-primary">
                          {product.price}
                        </span>
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

export default ProductAPI;
