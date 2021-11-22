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
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <div id="" className="bg-white ">
    <div className="max-w-2xl mx-auto pt-8 px-4 pb-16 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="title-font sm:text-5xl text-3xl mb-16 text-gray-900 text-center" style={{fontFamily: "Montserrat, sans-serif"}}>Products</h1>
          <div className="mt-6 grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
              products.slice(0,8).map(tour => <Product key={tour.id} tour={tour}></Product>)
            }
          </div>
        </div>
        <div className="text-center mx-auto mb-16">
          <Link to="/explore" className="kick--btn items-center text-center mx-auto">
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