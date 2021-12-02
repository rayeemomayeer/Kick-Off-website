import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const Cart = () => {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  let subTotal = 0;

  useEffect(() => {
    const url = `https://safe-beyond-59939.herokuapp.com/myOrders?email=${user.email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email, token]);

  const handleDelete = (id) => {
    if (window.confirm("Are You Sure, You Want to Delete This Item ?")) {
      const url = `https://safe-beyond-59939.herokuapp.com/myOrders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
            toast("Product Deleted Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
          }
        });
    } else {
      return;
    }
  };
  return (
    <div className="pt-20 md:p-24">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <div className="h-full flex flex-col bg-white">
        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
          <div className="flex items-start justify-between">
            <h2 className="text-2xl text-gray-900" id="slide-over-title">
              {orders.length} Products Added in Cart
            </h2>
            <div className="ml-3 h-7 flex items-center"></div>
          </div>
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                <FlipMove typeName="ul" duration={500}>
                  {orders.map((order) => (
                    <li className="py-6 px-1 md:px-0 flex flex-col md:flex-row shadow-sm md:shadow-none">
                      <div className="flex-shrink-0 w-32 h-28 border border-gray-200 rounded-md overflow-hidden mx-auto">
                        <img
                          src={order.details.image}
                          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base text-gray-900">
                            <h3 className="text-lg">{order.details.name}</h3>
                            <p className="ml-4 text-lg">
                              $ {order.details.price}
                            </p>
                            <span className="hidden">
                              {(subTotal += order.details.price)}
                            </span>
                          </div>
                          <p className="mt-1 text-base text-gray-500">
                            {order.details.description.slice(0, 90)} ...
                          </p>
                          <div className="flex space-x-3">
                            <p className="mt-1 text-base text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 inline"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>{" "}
                              {order.phone}
                            </p>
                            <p className="mt-1 text-base text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 inline mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              {order.address}
                            </p>
                          </div>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-base">
                          <div className="flex space-x-3">
                            <p className="mt-1 text-base text-gray-500">
                              {order.details.reviews} reviews
                            </p>
                            <p className="mt-1 text-base text-gray-500">
                              {order.details.rating} rating
                            </p>
                          </div>
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => handleDelete(order._id)}
                              className="font-medium bg-red-100 rounded-lg p-1 px-2 text-red-600 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </FlipMove>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-lg font-medium text-gray-900">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-bold text-green-900">$ {subTotal}</p>
          </div>
          <p className="mt-0.5 text-base text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/dashboard/payment"
              className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-base text-center text-gray-500">
            <p>
              or{" "}
              <Link to="/explore">
                <button
                  type="button"
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Continue Shopping<span aria-hidden="true"> →</span>
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
