import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);
  return (
    
  <div id="tours" className="">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      
      <h1 className="title-font sm:text-5xl text-3xl mb-16 text-gray-900 text-left" style={{fontFamily: "Montserrat, sans-serif"}}>Products</h1>

      <div className="mt-6 grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
          products.map(tour => <Product key={tour.id} tour={tour}></Product>)
        }
      </div>
    </div>
  </div>

  );
};

export default Products;