import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const {id, name, image, price} = props.tour;
  return (
    <div class="flex flex-col items-center justify-center max-w-sm mx-auto rounded-2xl">
        <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
          <img className="rounded" src={image} alt="" />
        </div>

        <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{name.slice(0,20)}...</h3>
            
            <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200">$ {price}</span>
                <Link to={`/boot/${id}`}><button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">preview</button></Link>
            </div>
        </div>
    </div>
  );
};

export default Product;