import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Products/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Testimonials from './Testimonials/Testimonials';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://safe-beyond-59939.herokuapp.com/allProducts')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <div id="" className="bg-white ">
        <div className="max-w-2xl mx-auto pt-8 px-4 pb-16 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
          
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
              Products
            </h1>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500" />
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 md:gap-y-16 gap-x-20 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.slice(0, 8).map((tour) => (
              <Product key={tour.id} tour={tour}></Product>
            ))}
          </div>
        </div>
        <div className="text-center mx-auto mb-16">
          <Link
            to="/explore"
            className="kick--btn items-center text-center mx-auto"
          >
            Explore more
          </Link>
        </div>
      </div>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;