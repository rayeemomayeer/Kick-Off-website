import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from './../../hooks/useAuth';
  
const ProductDescription = () => {
  const {bootId} = useParams();
  const [details, setDetails]=useState({})
  const {user} = useAuth();
  const initialInfo = {userName: user.displayName, email: user.email, phone: '', address: ''}
  const [orderInfo, setOrderInfo] = useState(initialInfo);

  useEffect(() => {
    fetch('/products.json')
      .then(res=>res.json())
      .then(data=>{
    const p=data.find(p=>p.id==bootId)
      setDetails(p)
    })
    },[bootId])

  const handleOnBlur = e => {
    const field = e.target.name;
    const value= e.target.value;
    const newInfo = {...orderInfo};
    newInfo[field] = value;
    setOrderInfo(newInfo);
  } 
  const onSubmit = (e) => {
    const order = {
      ...orderInfo,
      details,
    } 

    delete details._id
    axios.post('https://whispering-island-81161.herokuapp.com/myOrders',order)
    .then(res=>{
      if(res.data.insertedId){
        toast.success('Added in to the My Orders', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
});
      }
    })

    e.preventDefault();
  }

  return (
    <div>
      
<div className="bg-white">
  
  <div className="pt-6">
<Link to="/home"><button className="text-green-700 text-2xl bg-green-200 rounded px-2 ml-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg> back to the home</button></Link>
    {/* Image gallery */}
    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      
      <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <img src={details?.detailImage} alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img src={details?.detailImage2} alt="Model wearing plain black basic tee." className="w-full h-full object-center object-cover" />
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img src={details?.detailImage3} alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover" />
        </div>
      </div>
      <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
        <img src={details?.detailImage4} alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover" />
      </div>
    </div>
    {/* Product info */}
    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
       
      </div>
      {/* Options */}
      <div className="mt-4 lg:mt-0 lg:row-span-3">
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-2 sm:px-2 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-0">
  
  <div className="ml-12 md:ml-0">
      <section className="  bg-gray-100 bg-opacity-50">
  <form onSubmit={onSubmit} className="max-w-2xl mx-auto shadow-md">
    <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
      <div className="max-w-sm mx-auto md:w-full md:mx-0">
        <div className="inline-flex items-center space-x-4">
          <span className="block relative rounded-xl">
            <img className="rounded-full w-16" alt="profil" src={user?.photoURL?user.photoURL:'https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png'} />
          </span>
          <h1 className="text-gray-600">
            {user?.displayName}
          </h1>
        </div>
      </div>
    </div>
    <div className="space-y-6 bg-white">
      <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
        <h2 className="max-w-sm mx-auto md:w-1/3">
          Account
        </h2>
        <div className="max-w-sm mx-auto md:w-2/3">
          <div className=" relative ">
            <input required onBlur={handleOnBlur} type="text" name="email" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" defaultValue={user?.email} />
          </div>
        </div>
      </div>
      <hr />
      <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
        <h2 className="max-w-sm mx-auto md:w-1/3">
          Personal info
        </h2>
        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
          <div>
            <div className=" relative ">
              <input onBlur={handleOnBlur} required type="text" name="userName" id="user-info-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" defaultValue={user?.displayName} />
            </div>
          </div>
          <div>
            <div className=" relative ">
              <input onBlur={handleOnBlur} required type="text" name="phone" id="user-info-phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Phone number" />
            </div>
          </div>
          <div>
            <div className=" relative ">
              <input onBlur={handleOnBlur} required type="text" name="address" id="user-info-address" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Current Address" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full px-4 pb-4 mx-auto text-gray-500 md:w-2/3">
        <button id="book-hotel-btn" type="submit" className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Place Order</button>
      </div>
    </div>
  </form>
</section>
    </div>
  
</div>
      </div>
      <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        {/* Description and details */}
        <div className="w-full">
  <h2 className="text-sm title-font text-gray-500 tracking-widest">Kick Off</h2>
  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{details.name}</h1>
  <div className="flex mb-4">
    <span className="flex items-center">
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span className="text-gray-600 ml-3">{details.reviews} Reviews</span>
    </span>
    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
      <a href={details.facebook} target="_blank" className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a href={details.twitter} target="_blank" className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </a>
      <a href={details.messenger} target="_blank" className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      </a>
    </span>
  </div>
  <p className="leading-relaxed">{details.description}</p>
  <hr className="my-12 text-gray-400" />
  <div className="flex justify-between">
    
  {/* Options */}
  <div className="lg:row-span-3">
    <div className="">
      {/* Colors */}
      <div>
        <h3 className="text-sm text-gray-900 font-medium">Color</h3>
        <fieldset className="mt-4">
          <legend className="sr-only">
            Choose a color
          </legend>
          <div className="flex items-center space-x-3">
            {/*
            Active and Checked: "ring ring-offset-1"
            Not Active and Checked: "ring-2"
          */}
            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center focus:outline-none ring-gray-400">
              <input type="radio" name="color-choice" defaultValue="White" className="sr-only" aria-labelledby="color-choice-0-label" />
              <p id="color-choice-0-label" className="sr-only">
                White
              </p>
              <span aria-hidden="true" className="h-8 w-8 bg-pink-500 border border-black border-opacity-10 rounded-full" />
            </label>
            {/*
            Active and Checked: "ring ring-offset-1"
            Not Active and Checked: "ring-2"
          */}
            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center focus:outline-none ring-gray-400">
              <input type="radio" name="color-choice" defaultValue="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
              <p id="color-choice-1-label" className="sr-only">
                Gray
              </p>
              <span aria-hidden="true" className="h-8 w-8 bg-red-500 border border-black border-opacity-10 rounded-full" />
            </label>
            {/*
            Active and Checked: "ring ring-offset-1"
            Not Active and Checked: "ring-2"
          */}
            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center focus:outline-none ring-gray-900">
              <input type="radio" name="color-choice" defaultValue="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
              <p id="color-choice-2-label" className="sr-only">
                Black
              </p>
              <span aria-hidden="true" className="h-8 w-8 bg-blue-900 border border-black border-opacity-10 rounded-full" />
            </label>
          </div>
        </fieldset>
      </div>
      {/* Sizes */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-gray-900 font-medium">Size</h3>
        </div>
        <fieldset className="mt-4">
          <legend className="sr-only">
            Choose a size
          </legend>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
            {/* Active: "ring-2 ring-indigo-500" */}
            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
              <input type="radio" name="size-choice" defaultValue="XXS" disabled className="sr-only" aria-labelledby="size-choice-0-label" />
              <p id="size-choice-0-label">
                XXS
              </p>
              <div aria-hidden="true" className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                <svg className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
            </label>
            {/* Active: "ring-2 ring-indigo-500" */}
            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
              <input type="radio" name="size-choice" defaultValue="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
              <p id="size-choice-1-label">
                XS
              </p>
              {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
              <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
            </label>
            {/* Active: "ring-2 ring-indigo-500" */}
            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
              <input type="radio" name="size-choice" defaultValue="S" className="sr-only" aria-labelledby="size-choice-2-label" />
              <p id="size-choice-2-label">
                S
              </p>
              {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
              <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
            </label>
            {/* Active: "ring-2 ring-indigo-500" */}
            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
              <input type="radio" name="size-choice" defaultValue="M" className="sr-only" aria-labelledby="size-choice-3-label" />
              <p id="size-choice-3-label">
                M
              </p>
              {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
              <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
            </label>
            {/* Active: "ring-2 ring-indigo-500" */}
            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
              <input type="radio" name="size-choice" defaultValue="L" className="sr-only" aria-labelledby="size-choice-4-label" />
              <p id="size-choice-4-label">
                L
              </p>
              {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
              <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
            </label>
            {/* Active: "ring-2 ring-indigo-500" */}
            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
              <input type="radio" name="size-choice" defaultValue="XL" className="sr-only" aria-labelledby="size-choice-5-label" />
              <p id="size-choice-5-label">
                XL
              </p>
              {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
              <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
            </label>
            {/* Active: "ring-2 ring-indigo-500" */}
            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
              <input type="radio" name="size-choice" defaultValue="2XL" className="sr-only" aria-labelledby="size-choice-6-label" />
              <p id="size-choice-6-label">
                2XL
              </p>
              {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
              <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
            </label>
            {/* Active: "ring-2 ring-indigo-500" */}
            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
              <input type="radio" name="size-choice" defaultValue="3XL" className="sr-only" aria-labelledby="size-choice-7-label" />
              <p id="size-choice-7-label">
                3XL
              </p>
              {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
              <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
            </label>
          </div>
        </fieldset>
      </div>
      
    </div>
    
    
  </div>
    
    <div><span className="title-font font-medium text-3xl text-gray-900">$ {details.price}</span></div>

    <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false} />
  </div>
</div>
      </div>
    </div>
  </div>
</div>
      </div>
    
  );
};

export default ProductDescription;