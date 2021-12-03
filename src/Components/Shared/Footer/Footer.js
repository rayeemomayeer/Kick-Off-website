import React from 'react';
import { Link } from 'react-router-dom';
import football from './football-boots.png';
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-400 bg-gray-900 body-font mt-24">
        <div className="container px-5 py-24 mx-auto flex md:items-left lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-start md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img className="w-12" src={football} alt="" />
              <span className="ml-3 text-xl">Dreamy Travels</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Kick Off sells all brand boots in low price
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-start order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Home
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <HashLink
                    to="/home#products"
                    className="text-gray-400 hover:text-white"
                  >
                    products
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/home#testimonials"
                    className="text-gray-400 hover:text-white"
                  >
                    testimonials
                  </HashLink>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Products
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to="/explore"
                    className="text-gray-400 hover:text-white"
                  >
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/addProduct"
                    className="text-gray-400 hover:text-white"
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manageProducts"
                    className="text-gray-400 hover:text-white"
                  >
                    Manage Products
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                More
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-400 hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-gray-400 hover:text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-gray-400 hover:text-white"
                  >
                    Register
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <Link to="/login">
                  <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-left">
                    Signin now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2021 all rights —
              <Link
                to="/home"
                className="text-gray-500 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                Kick Off
              </Link>
            </p>
            <p className="ml-2 align-middle text-gray-100 text-center md:text-start text-lg my-2 md:my-0">Author: Rayeem Omayeer</p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="text-gray-400"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/home"
                target="_blank"
                className="ml-3 text-gray-400"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="ml-3 text-gray-400"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/home/?originalSubdomain=bd"
                target="_blank"
                className="ml-3 text-gray-400"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;