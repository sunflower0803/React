

import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, calculateTotal } = useCart();
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Cart Icon */}
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        View Cart ({cart.length})
      </button>

      {/* Modal Popup */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex={-1}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your Cart</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {cart.length > 0 ? (
                  <div>
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="d-flex justify-content-between align-items-center mb-3"
                      >
                        <div>
                          <h6>{item.name}</h6>
                          <p>
                            ₹{item.price} x {item.quantity}
                          </p>
                        </div>
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                    <h5>Total: ₹{calculateTotal()}</h5>
                  </div>
                ) : (
                  <p>Your cart is empty.</p>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                {cart.length > 0 && (
                  <Link to="/checkout" className="btn btn-primary">
                    Proceed to Checkout
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
