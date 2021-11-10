import React from 'react';
import { Link } from 'react-router-dom';

const TopBanner = () => {
  return (
    <section className="pt-24 bg-white bg-gradient-to-r from-green-800 to-gray-800 overflow-hidden h-screen">
      <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span className="text-transparent bg-clip-text leading-12 bg-gradient-to-r from-gray-300 to-gray-500">Don't hurt your feet!</span><br/> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r to-yellow-500 from-green-400 lg:inline">BUY FOOTBALL BOOTS</span> <span className="text-gray-200"> for more comfort in playing !!</span>
          </h1>
          
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0">
              Get Started
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a>
            <Link to="/explore" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
              Explore
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12 mx-auto ">
          <img className="h-full shadow-xl rounded-xl mx-auto" src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
        </div>
      </div>
    </section>
  );
};

export default TopBanner;