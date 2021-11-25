import React, { useEffect, useState } from 'react';
import Product from '../Products/Product/Product';

const Turf = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/products?surface=turf')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);
  return (
    
  <div id="" className="">
    <div className="max-w-2xl mx-auto pb-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:ml-0 lg:mr-2">
      
      <h1 className="title-font sm:text-5xl text-3xl mb-16 text-gray-900 text-left" style={{fontFamily: "Montserrat, sans-serif"}}>Products <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg> <span className="text-gray-600 text-3xl">Turf</span></h1>

      <div className="mt-6 grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
          products.map(tour => <Product key={tour._id} tour={tour}></Product>)
        }
      </div>
    </div>
  </div>

  );
};

export default Turf;