import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ToastContainer } from 'react-toastify';
import CardDetailsPreview from '../AddProduct/CardDetailsPreview';
import CardPreview from '../AddProduct/CardPreview';

const EditProduct = () => {
  const {bootId} = useParams();
  const [details, setDetails] = useState({})
  useEffect(() => {
    fetch('https://safe-beyond-59939.herokuapp.com/products')
      .then(res=>res.json())
      .then(data=>{
    const p=data.find(p=>p._id==bootId)
      setDetails(p)
    })
    },[bootId])

  
  const handleOnBlur = e => {
    const field = e.target.name;
    const value= e.target.value;
    const newInfo = {...details};
    newInfo[field] = value;
    setDetails(newInfo);
  }
	const onSubmit = (e) =>{
		
		e.preventDefault();
    
		// axios.put(`https://safe-beyond-59939.herokuapp.com/products/${bootId}`,details)
    // .then(res=>{
    //   toast.success('Product updated Successfully', {
		// 			position: "top-right",
		// 			autoClose: 5000,
		// 			hideProgressBar: false,
		// 			closeOnClick: true,
		// 			pauseOnHover: false,
		// 			draggable: true,
		// 			progress: undefined,
		// 			});
    // })
	}

  return (
    <div>
      <div class="relative  flex flex-wrap flex-row-reverse bg-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover ">
	<div class="absolute bg-black opacity-0 inset-0 z-0"></div>
	<form onSubmit={onSubmit} class="max-w-md  space-y-8 p-10 h-full bg-white rounded-xl shadow-lg z-10 md:mr-24">
<div class="grid  gap-8 grid-cols-1">
	<div class="flex flex-col ">
			<div class="flex flex-col sm:flex-row items-center">
				<h2 class="font-bold text-2xl font-serif mr-auto">Edit Product</h2>
				<div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
			</div>
			<div class="mt-5">
				<div class="form">
					<div class="md:space-y-2 mb-3">
						
						<div class="md:flex flex-row md:space-x-4 w-full text-xs">
							<div class="mb-3 space-y-2 w-full text-xs">
								<label class=" text-gray-600 py-2 text-lg">Product  Name <abbr title="required">*</abbr></label>
								<input onChange={handleOnBlur} placeholder="Product Name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 text-lg text-gray-700 font-light " required="required" type="text" defaultValue={details.name} name="name" id="integration_shop_name" />
								<p class="text-red text-xs hidden">Please fill out this field.</p>
							</div>
							
							
						</div>
            <div class="mb-3 space-y-2 w-full text-xs">
								<label class=" text-gray-600 py-2 text-lg">Product  Price <abbr title="required">*</abbr></label>
								<input onChange={handleOnBlur} defaultValue={details.price} placeholder="Product Price" class="font-light appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 mb-5 text-lg text-gray-700" required="required" type="text" name="price" id="integration_shop_name" />
								<p class="text-red text-xs hidden">Please fill out this field.</p>
							</div>
            <div class="my-3 space-y-2 w-full text-xs">
								<label class=" text-gray-600 py-2 pt-3 text-lg">Product  Category <abbr title="required">*</abbr></label>
								<input onChange={handleOnBlur} defaultValue={details.category} placeholder="Product Category" class="font-light appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 text-lg text-gray-700" required="required" type="text" name="category" id="integration_shop_name" />
								<p class="text-red text-xs hidden">Please fill out this field.</p>
							</div>
						<div class="mb-3 space-y-2 w-full text-xs">
							<div class="flex flex-wrap items-stretch w-full mt-4 relative">
								<div class="flex">
									<span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
                                   </span>
								</div>
								<input required="required" type="text" defaultValue={details.image} onChange={handleOnBlur} class="font-light flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow text-lg text-gray-700" name="image" placeholder="product image url" />
                  </div>
							</div>
							<div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
								<div class="w-full flex flex-col mb-1">
									<input required="required" onChange={handleOnBlur} defaultValue={details.detailImage} placeholder="detail Image url 1" class="font-light appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 text-lg text-gray-700" type="text" name="detailImage" id="integration_street_address" />
              </div>
									<div class="w-full flex flex-col mb-1">
									<input required="required" onChange={handleOnBlur} defaultValue={details.detailImage2} placeholder="detail Image url 2" class="font-light appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 text-lg text-gray-700" type="text" name="detailImage2" id="integration_street_address" />
										<p class="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
									</div>
								</div>
							<div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
								<div class="w-full flex flex-col mb-1">
									<input required="required" onChange={handleOnBlur} defaultValue={details.detailImage3} placeholder="detail Image url 3" class="font-light appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 text-lg text-gray-700" type="text" name="detailImage3" id="integration_street_address" />
              </div>
									<div class="w-full flex flex-col mb-1">
									<input required="required" onChange={handleOnBlur} defaultValue={details.detailImage4} placeholder="detail Image url 4" class="font-light appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 text-lg text-gray-700" type="text" name="detailImage4" id="integration_street_address" />
										<p class="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
									</div>
								</div>
                
								<div class="flex-auto w-full mb-1 text-xs space-y-2">
									<label class=" text-lg text-gray-600 py-2">Description</label>
									<textarea onChange={handleOnBlur} defaultValue={details.description} required="required" name="description" id="" class="font-light text-lg text-gray-700 min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Enter your comapny info" spellcheck="false"></textarea>
									
								</div>

								<div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
									<button type="submit" class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Update Product</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			</form>
      
        <div className="md:w-7/12">
					<div><CardPreview details={details}></CardPreview></div>
        <CardDetailsPreview details={details}></CardDetailsPreview>
				</div>
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
  );
};

export default EditProduct;