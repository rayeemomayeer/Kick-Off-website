import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';
import {
    Link
} from "react-router-dom";
import FlipMove from "react-flip-move";

const ManageAllOrders = () => {
  const {user, token} = useAuth();
  const [orders, setOrders] = useState([]);
  let subTotal = 0;
  

  useEffect(()=>{
    const url = `http://localhost:5000/orders`
    fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email, token])

  const handleApprovedAction = (id,userName, userEmail, productName) => {
    const statue = {
      statue: 'Approved',
    }
    const url = `http://localhost:5000/orders/${id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(statue)
    }).then(res=>res.json())
    .then(data=> {
      const remaining = orders.filter(order=>order._id !== id)
      setOrders(remaining)
      toast(`Approved ${userName}'s order`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
        
    })
  }

  const handleCancelAction = (id,userName) => {
    const statue = {
      statue: 'Cancel',
    }
    const url = `http://localhost:5000/orders/${id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(statue)
    }).then(res=>res.json())
    .then(data=> {
      const remaining = orders.filter(order=>order._id !== id)
      setOrders(remaining)
      toast(`Cancel ${userName}'s order`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    })
  }
  const handlePendingAction = (id,userName) => {
    const statue = {
      statue: 'Pending',
    }
    const url = `http://localhost:5000/orders/${id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(statue)
    }).then(res=>res.json())
    .then(data=> {
      const remaining = orders.filter(order=>order._id !== id)
      setOrders(remaining)
      toast(`Pending ${userName}'s order`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    })
  }


  return (
    <div className="p-4">
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
            <h2
              className="text-lg font-medium text-gray-900"
              id="slide-over-title"
            >
              Products in pending
            </h2>
            <div className="ml-3 h-7 flex items-center"></div>
          </div>
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {orders.map((order) => (
                  <span>
                    <FlipMove typeName="ul" duration={1000}>
                      {order.statue == null && (
                        <li className="py-6 flex">
                          <div className="flex-shrink-0 w-32 h-32 border border-gray-200 rounded-md overflow-hidden">
                            <img
                              src={order.details.image}
                              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{order.details.name}</h3>
                                <p className="ml-4">$ {order.details.price}</p>
                                <span className="hidden">
                                  {(subTotal += order.details.price)}
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                {order.details.description.slice(0, 80)} ...
                              </p>

                              <div className="flex">
                                <div className="align-center">
                                  <p className="mt-1 font-mono text-base text-gray-600">
                                    <img
                                      className="h-6 w-6 inline rounded-full"
                                      src={order.photoURL}
                                      alt
                                    />{" "}
                                    {order.userName}
                                  </p>
                                </div>
                                <p className="mt-1 ml-2 text-base font-mono text-gray-500">
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
                                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                  </svg>{" "}
                                  {order.email}
                                </p>
                                <p className="mt-1 ml-2 text-base font-mono text-gray-500">
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
                              </div>
                            </div>
                            <div className="flex-1 font-medium flex items-end justify-between text-sm">
                              <p className="text-gray-500">
                                {order.details.rating} rating
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {order.details.reviews} reviews
                              </p>
                              {order.address && (
                                <p className="text-gray-500 font-mono">
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
                              )}
                              <div className="flex">
                                <button
                                  type="button"
                                  onClick={() =>
                                    handlePendingAction(
                                      order._id,
                                      order.userName
                                    )
                                  }
                                  className="font-bold text-yellow-600 hover:text-yellow-700 rounded-lg bg-yellow-100 p-2 font-mono"
                                >
                                  Pending
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleApprovedAction(
                                      order._id,
                                      order.userName,
                                      order.email,
                                      order.details.name
                                    )
                                  }
                                  className="font-bold text-green-600 hover:text-green-700 rounded-lg bg-green-100 p-2 font-mono mx-3"
                                >
                                  Approved
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleCancelAction(
                                      order._id,
                                      order.userName
                                    )
                                  }
                                  className="font-bold text-red-600 hover:text-red-700 rounded-lg bg-red-100 p-2 font-mono"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      )}
                    </FlipMove>
                  </span>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p className="font-bold text-green-900">$ {subTotal}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
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
          <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
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

export default ManageAllOrders;