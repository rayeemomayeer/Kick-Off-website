import React from 'react';

const CardDetailsPreview = ({details}) => {
  const {name,detailImage,detailImage2,detailImage3,detailImage4,description,price} = details;
  return (
    <div>
      <div className="pt-6">
    {/* Image gallery */}
    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-2">
      
      <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <img src={detailImage} alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-2">
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img src={detailImage2} alt="Model wearing plain black basic tee." className="w-full h-full object-center object-cover" />
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img src={detailImage3} alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover" />
        </div>
      </div>
      <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
        <img src={detailImage4} alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover" />
      </div>
    </div>
    {/* Product info */}
    <div className="w-full mx-10 mt-7">
      <div className="w-full">
  <h1 className="text-indigo-200 capitalize text-3xl title-font font-bold mb-1">{name}</h1>
  <p className="text-blue-200 mb-7">{description}</p>
  <div className="flex justify-between">
    
    <div><span className="title-font font-medium text-3xl  text-gray-300">$ {price}</span></div>

  </div>
</div>
      
    </div>
  </div>
    </div>
  );
};

export default CardDetailsPreview;