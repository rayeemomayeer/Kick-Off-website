import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-center align-middle text-gray-800 text-6xl">404 not found</h1>
      <Link to="/home"><button className="bg-green-100 text-green-700 p-2 rounded-lg text-center mx-auto mt-10">back to the home</button></Link>
    </div>
  );
};

export default NotFound;