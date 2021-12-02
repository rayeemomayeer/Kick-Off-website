import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const {tour} = props;
  return (
    <div className="flex flex-col items-center justify-center max-w-sm mx-auto rounded-2xl">
      <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
        <img className="rounded" src={tour?.image} alt="" />
      </div>

      <div className="w-4/5 mt-20 md:-mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white text-lg md:text-base">
          {tour?.name?.slice(0, 20)}...
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200 text-lg md:text-base">
            $ {tour?.price}
          </span>
          <Link to={`/boot/${tour?._id}`}>
            <button className="px-2 py-1 text-base md:text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              preview
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;