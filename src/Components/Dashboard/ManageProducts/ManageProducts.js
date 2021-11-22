import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  const handleDelete = id => {
    if(window.confirm("Are You Sure, You Want to Delete This Product ?")){
      const url = `http://localhost:5000/products/${id}`;
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
      
      <h1 className="title-font sm:text-5xl text-3xl mb-16 text-gray-900 text-left" style={{fontFamily: "Montserrat, sans-serif"}}>Manage Products</h1>

      <div className="mt-6 grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
          products.map(tour => (
            <div className="flex flex-col items-center justify-center max-w-sm mx-auto rounded-2xl">
      
        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
          <img className="rounded" src={tour?.image} alt="" />
          
        </div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{tour?.name?.slice(0,20)}...</h3>
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
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">$ {tour?.price}</span>
                <div>
                  <button onClick={()=> handleDelete(tour?._id)} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-indigo-700 rounded hover:bg-red-700 dark:hover:bg-red-600 focus:bg-red-700 dark:focus:bg-gray-600 focus:outline-none mr-2">edit</button>

                <button onClick={()=> handleDelete(tour?._id)} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-pink-800 rounded hover:bg-red-700 dark:hover:bg-red-600 focus:bg-red-700 dark:focus:bg-gray-600 focus:outline-none">delete</button>
                </div>
            </div>
        </div>
    </div>
          ))
        }
      </div>
    </div>
  </div>

  );
};

export default ManageProducts;