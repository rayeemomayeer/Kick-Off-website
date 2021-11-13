import React, { useEffect, useState } from 'react';

const Testimonials = () => {
  const [reviews, setReviews] = useState([])
  useEffect(()=>{
    const url = `http://localhost:5000/reviews`
    fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
  return (
    <div>
      <div>
  {/* component */}
  <style dangerouslySetInnerHTML={{__html: "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')" }} />
  <div className="min-w-screen min-h-screen  flex items-center justify-center py-5">
    <div className="w-full bg-white   px-5 py-16 md:py-24 text-gray-800">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">Testimonials</h1>
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500" />
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
          </div>
        </div>
        <div className="-mx-3 md:flex items-start flex-wrap">
          {
            reviews.map(review => (
              <div className="w-1/3 mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src={review.user.photoURL} alt />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">{review.user.displayName}</h6>
                  <h6 className="text-sm text-gray-500">{review.user.email}</h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>{review.review}<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
              </div>
              <div className="w-full pt-4">
                <h1 className=""><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="DarkOrange">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg> <span className="text-gray-500 font-medium">{review.rating}</span></h1>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Testimonials;