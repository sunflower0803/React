import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Header() {
  const { cart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate the total number of items in the cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Toggle the modal visibility
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <header
      id="header"
      className="site-header header-scrolled position-fixed text-black bg-light"
    >
      <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="images/main-logo.png" className="logo" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler d-flex d-lg-none order-3 p-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#bdNavbar"
            aria-controls="bdNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg className="navbar-icon">
              <use xlinkHref="#navbar-icon" />
            </svg>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="bdNavbar"
            aria-labelledby="bdNavbarOffcanvasLabel"
          >
            <div className="offcanvas-header px-4 pb-0">
              <Link className="navbar-brand" to="/">
                <img src="images/main-logo.png" className="logo" alt="Logo" />
              </Link>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                data-bs-target="#bdNavbar"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul
                id="navbar"
                className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3"
              >
                <li className="nav-item">
                  <a className="nav-link me-4 active" href="#billboard">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#company-services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#mobile-products">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#smart-watches">
                    Watches
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#yearly-sale">
                    Sale
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#latest-blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link me-4 dropdown-toggle link-dark"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="index.html" className="dropdown-item">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Cart
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Single Post
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Single Product
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Contact
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <div className="user-items ps-5">
                    <ul className="d-flex justify-content-end list-unstyled">
                      <li className="search-item pe-3">
                        <a href="#" className="search-button">
                          <svg className="search">
                            <use xlinkHref="#search" />
                          </svg>
                        </a>
                      </li>
                      <li className="pe-3">
                        <a href="#">
                          <svg className="user">
                            <use xlinkHref="#user" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/checkout"
                          className="position-relative"
                          onClick={toggleModal}
                        >
                          <svg className="cart">
                            <use xlinkHref="#cart" />
                          </svg>
                          {cartCount > 0 && (
                            <span
                              className="badge bg-danger text-white position-absolute top-0 start-100 translate-middle"
                              style={{
                                fontSize: "0.75rem",
                                padding: "2px 6px",
                              }}
                            >
                              {cartCount}
                            </span>
                          )}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
