import axios from 'axios';
import React, { useState } from 'react';
import Rating from 'react-rating';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
  const [review, setReview] = useState('');
  const [rate, setRate] = useState(0);
  const {user} = useAuth();

  const handleOnBlur = e => {
    const value= e.target.value;
    setReview(value);
  } 
  
  const onSubmit = (e) => {
    const comReview = {
      review: review,
      rating: rate,
      user
    } 

    axios.post('https://safe-beyond-59939.herokuapp.com/reviews',comReview)
    .then(res=>{
      if(res.data.insertedId){
        toast.success('Review Added Successfully', {
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
    <div className="">
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false} />
      <div className="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg">
  <form onSubmit={onSubmit} className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
    <div className="flex flex-wrap -mx-3 mb-6">
      <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Give a Review</h2>
      <div className="w-full md:w-full px-3 mb-2 mt-2">
        <textarea onBlur={handleOnBlur} className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="review" placeholder="Type Your Comment" required defaultValue={""} />
      </div>
      <Rating required onChange={(rate) => setRate(rate)} className="text-sm ml-3 mb-5 text-yellow-500"
  emptySymbol="fa fa-star-o fa-2x"
  fullSymbol="fa fa-star fa-2x"
  fractions={2}
/>
      <div className="w-full md:w-full flex items-start md:w-full px-3">
        <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
          <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs md:text-sm pt-px inline">Your review will shown in Home page</p>
        </div>
       
        <div className="-mr-1">
          <input type="submit" className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" defaultValue="Post Comment" />
        </div>
      </div>
    </div></form>
</div>
    </div>
  );
};

export default Review;