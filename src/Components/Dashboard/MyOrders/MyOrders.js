import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../../hooks/useAuth'

const MyOrders = () => {
  const {user, token} = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    const url = `http://localhost:5000/myOrders?email=${user.email}`
    fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email, token])
  const handleDelete = id => {
    if(window.confirm("Are You Sure, You Want to Delete This Item ?")){
      const url = `http://localhost:5000/myOrders/${id}`;
    fetch(url, {
      method: 'DELETE'
    }).then(res=>res.json())
    .then(data=> {
      console.log(data);
      if(data.deletedCount){
        const remaining = orders.filter(order=>order._id !== id)
        setOrders(remaining)
        toast('Product Deleted Successfully', {
position: "top-right",
autoClose: 5000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
});
      }
    })
    }else{
      return
    }
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
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                      {orders.length} Products Ordered
                    </h2>
                    <div className="ml-3 h-7 flex items-center">
                      <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                      {orders?.address}
                      </h2>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {
                          orders.map(order => (
                            <li className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img src={order.details.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="w-full h-full object-center object-cover" />
                          </div>
                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  {order.details.name}
                                </h3>
                                <p className="ml-4">
                                  $ {order.details.price}
                                </p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                {order.details.description.slice(0,80)} ...
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {order.details.reviews} reviews
                              </p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <p className="text-gray-500">
                                {order.details.rating} rating
                              </p>
                              <div className="flex">
                                <button type="button" onClick={()=> handleDelete(order._id)} className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                              </div>
                            </div>
                          </div>
                        </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$262.00</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <a href="#" className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Checkout</a>
                  </div>
                  <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                    <p>
                      or <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> →</span></button>
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
};

export default MyOrders;