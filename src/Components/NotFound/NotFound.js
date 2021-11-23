import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-indigo-500  bg-fixed bg-cover bg-bottom error-bg h-screen  w-screen overflow-hidden">
      
	<div class="container filter brightness-125 ">
		<div class="row">
			<div class="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
				<div class="relative ">
				<h1 class="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold text-white">
					<span>4</span><span>0</span><span>4</span></h1>
					<span class="absolute  top-0   -ml-12  text-gray-300 font-semibold">Oops!</span>
					</div>
				<h5 class="text-gray-300 text-xl font-semibold -mr-10 -mt-3">Page not found</h5>
				<p class="text-gray-100 text-2xl mt-2 mb-6">we are sorry, but the page you requested was not found</p>
				<Link to="/home"
					class="bg-green-400 px-5 py-3 text-lg shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg">
					back to the Home
				</Link>
			</div>
		</div>
	</div>
</div>
  );
};

export default NotFound;