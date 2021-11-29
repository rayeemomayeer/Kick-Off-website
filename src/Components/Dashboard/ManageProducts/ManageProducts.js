import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://safe-beyond-59939.herokuapp.com/allProducts')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  const handleDelete = id => {
    if(window.confirm("Are You Sure, You Want to Delete This Product ?")){
      const url = `https://safe-beyond-59939.herokuapp.com/products/${id}`;
    fetch(url, {
      method: 'DELETE'
    }).then(res=>res.json())
    .then(data=> {
      console.log(data);
      if(data.deletedCount){
        const remaining = products.filter(order=>order._id !== id)
        setProducts(remaining)
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
    <div id="" className="">
      <div className="max-w-2xl mx-auto pb-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1
          className="title-font sm:text-5xl text-3xl mb-16 text-gray-900 text-left"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Manage Products
        </h1>
        <div className="mt-6 grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
      
          
            {products.map((tour) => (
              <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                <div class="w-full md:w-1/3 h-full bg-white grid place-items-center">
                  <img
                    src={tour?.image}
                    class="rounded-xl h-full object-cover w-full"
                  />
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
                </div>
                <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                  <div class="flex justify-between item-center">
                    <p class="text-gray-500 font-medium hidden md:block">
                      {tour?.reviews} reviews
                    </p>
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <p class="text-gray-600 font-bold text-sm ml-1">
                        {tour?.rating}
                      </p>
                    </div>
                    <div class="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-pink-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                      Best sales
                    </div>
                  </div>
                  <h3 class="font-black text-gray-800 md:text-xl text-xl">
                    {tour?.name}
                  </h3>
                  <p class="text-gray-500 text-base">
                    {tour?.description?.slice(0, 150)}...
                  </p>
                  <div className="flex justify-between">
                    <p class="text-lg font-black text-gray-800">
                      <i class="fas fa-dollar-sign"></i> {tour?.price}
                    </p>

                    <div>
                      <Link to={`/edit/${tour?._id}`}>
                        <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-indigo-700 rounded hover:bg-indigo-700 dark:hover:bg-red-600 focus:bg-indigo-700 dark:focus:bg-gray-600 focus:outline-none mr-2">
                          edit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(tour?._id)}
                        className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-pink-800 rounded hover:bg-red-700 dark:hover:bg-red-600 focus:bg-red-700 dark:focus:bg-gray-600 focus:outline-none"
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;