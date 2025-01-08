import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function CheckOut() {
  const { cart, updateQuantity, removeFromCart, calculateTotal } = useCart();

  // Calculate Subtotal, Discount, Shipping, and Tax
  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subTotal * 0.1; // Example: 10% discount
  const shippingCharge = 25; // Example: Flat rate shipping
  const tax = subTotal * 0.05; // Example: 5% tax
  const total = subTotal - discount + shippingCharge + tax;

  return (
    <div className="container">
      <div className="row">
        {/* Cart Items Section */}
        <div className="col-xl-8">
          {cart.map((item) => (
            <div key={item.id} className="card border shadow-none mb-4">
              <div className="card-body">
                <div className="d-flex align-items-start border-bottom pb-3">
                  <div className="me-4">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="avatar-lg rounded"
                    />
                  </div>
                  <div className="flex-grow-1 align-self-center overflow-hidden">
                    <div>
                      <h5 className="text-truncate font-size-18">
                        <a href="#" className="text-dark">
                          {item.name}
                        </a>
                      </h5>
                      <p className="mb-0 mt-1">
                        Color: <span className="fw-medium">Gray</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ms-2">
                    <ul className="list-inline mb-0 font-size-16">
                      <li className="list-inline-item">
                        <button
                          className="text-muted px-1 btn btn-link"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="mdi mdi-trash-can-outline" />
                        </button>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="text-muted px-1">
                          <i className="mdi mdi-heart-outline" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mt-3">
                        <p className="text-muted mb-2">Price</p>
                        <h5 className="mb-0 mt-2">${item.price}</h5>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="mt-3">
                        <p className="text-muted mb-2">Quantity</p>
                        <div className="d-inline-flex">
                          <select
                            className="form-select form-select-sm w-xl"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value))
                            }
                          >
                            {[...Array(10)].map((_, i) => (
                              <option key={i} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mt-3">
                        <p className="text-muted mb-2">Total</p>
                        <h5>${(item.price * item.quantity).toFixed(2)}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Continue Shopping and Checkout Buttons */}
          <div className="row my-4">
            <div className="col-sm-6">
              <Link to="/" className="btn btn-link text-muted">
                <i className="mdi mdi-arrow-left me-1" /> Continue Shopping
              </Link>
            </div>
            <div className="col-sm-6 text-sm-end">
              <button className="btn btn-success">
                <i className="mdi mdi-cart-outline me-1" /> Checkout
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="col-xl-4">
          <div className="mt-5 mt-lg-0">
            <div className="card border shadow-none">
              <div className="card-header bg-transparent border-bottom py-3 px-4">
                <h5 className="font-size-16 mb-0">
                  Order Summary <span className="float-end">#MN0124</span>
                </h5>
              </div>
              <div className="card-body p-4 pt-2">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <tbody>
                      <tr>
                        <td>Sub Total :</td>
                        <td className="text-end">${subTotal.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Discount :</td>
                        <td className="text-end">- ${discount.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Shipping Charge :</td>
                        <td className="text-end">
                          ${shippingCharge.toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <td>Estimated Tax :</td>
                        <td className="text-end">${tax.toFixed(2)}</td>
                      </tr>
                      <tr className="bg-light">
                        <th>Total :</th>
                        <td className="text-end">
                          <span className="fw-bold">${total.toFixed(2)}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* end table-responsive */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
  );
}

export default CheckOut;
