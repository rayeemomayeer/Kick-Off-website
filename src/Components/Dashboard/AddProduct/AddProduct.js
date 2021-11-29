import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import CardDetailsPreview from './CardDetailsPreview';
import CardPreview from './CardPreview';

const AddProduct = () => {
  const initialInfo = {name: 'product name',image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9709b1dd-eafe-4cd4-b913-9e9432edc05e/phantom-gt2-elite-fg-firm-ground-soccer-cleat-3R4rBc.png', price: 250,detailImage: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1cc555be-c24f-4509-88ca-d7b20658b25a/phantom-gt2-elite-fg-firm-ground-soccer-cleat-3R4rBc.png',detailImage2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1222a618-0683-4a8d-b547-d5e53ca31fd5/phantom-gt2-elite-fg-firm-ground-soccer-cleat-3R4rBc.png',detailImage3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a0b6a588-9d92-4b45-8dc6-107c64610972/phantom-gt2-elite-fg-firm-ground-soccer-cleat-3R4rBc.png', detailImage4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d579fe0e-5c15-495d-810e-29efd4ee8328/phantom-gt2-elite-fg-firm-ground-soccer-cleat-3R4rBc.png', description: 'Building off the Phantom GT, the Nike Phantom GT2 Elite FG features an updated design and raised patterning to help create optimal spin to control the flight of the ball. Off-center lacing provides a clean strike zone for skillful dribbling, passing and shooting.' }

  const [details, setDetails] = useState(initialInfo)

  const handleOnBlur = e => {
    const field = e.target.name;
    const value= e.target.value;
    const newInfo = {...details};
    newInfo[field] = value;
    setDetails(newInfo);
  }
	const onSubmit = (e) =>{
		const extraInfo = {
			...details, 
			rating: 0, 
			reviews: 0,
			facebook: "https://www.facebook.com/",
    	witter: "https://twitter.com/home",
    	messenger: "https://www.messenger.com",
		}
		e.preventDefault();
		axios.post('https://safe-beyond-59939.herokuapp.com/products',extraInfo)
    .then(res=>{
      if(res.data.insertedId){
        toast.success('Product added Successfully', {
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
	}

  return (
    <div>
      <div class="relative  flex flex-wrap bg-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover ">
	<div class="absolute bg-black opacity-0 inset-0 z-0"></div>
	<form onSubmit={onSubmit} class="max-w-md w-full space-y-8 p-10 h-full bg-white rounded-xl shadow-lg z-10">
<div class="grid  gap-8 grid-cols-1">
	<div class="flex flex-col ">
			<div class="flex flex-col sm:flex-row items-center">
				<h2 class="font-semibold text-xl mr-auto">Add Product</h2>
				<div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
			</div>
			<div class="mt-5">
				<div class="form">
					<div class="md:space-y-2 mb-3">
						
						<div class="md:flex flex-row md:space-x-4 w-full text-xs">
							<div class="mb-3 space-y-2 w-full text-xs">
								<label class="font-light text-gray-600 py-2 text-lg">Product  Name <abbr title="required">*</abbr></label>
								<input onChange={handleOnBlur} placeholder="Product Name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="name" id="integration_shop_name" />
								<p class="text-red text-xs hidden">Please fill out this field.</p>
							</div>
							
							
						</div>
            <div class="mb-3 space-y-2 w-full text-xs">
								<label class="font-light text-gray-600 py-2 text-lg">Product  Price <abbr title="required">*</abbr></label>
								<input onChange={handleOnBlur} placeholder="Product Price" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 mb-5" required="required" type="text" name="price" id="integration_shop_name" />
								<p class="text-red text-xs hidden">Please fill out this field.</p>
							</div>
            <div class="my-3 space-y-2 w-full text-xs">
								<label class="font-light text-gray-600 py-2 pt-3 text-lg">Product  Category <abbr title="required">*</abbr></label>
								<input onChange={handleOnBlur} placeholder="Product Category" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="category" id="integration_shop_name" />
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
								<input required="required" type="text" onChange={handleOnBlur} class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" name="image" placeholder="product image url" />
                  </div>
							</div>
							<div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
								<div class="w-full flex flex-col mb-1">
									<input required="required" onChange={handleOnBlur} placeholder="detail Image url 1" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="detailImage" id="integration_street_address" />
              </div>
									<div class="w-full flex flex-col mb-1">
									<input required="required" onChange={handleOnBlur} placeholder="detail Image url 2" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="detailImage2" id="integration_street_address" />
										<p class="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
									</div>
								</div>
							<div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
								<div class="w-full flex flex-col mb-1">
									<input required="required" onChange={handleOnBlur} placeholder="detail Image url 3" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="detailImage3" id="integration_street_address" />
              </div>
									<div class="w-full flex flex-col mb-1">
									<input required="required" onChange={handleOnBlur} placeholder="detail Image url 4" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="detailImage4" id="integration_street_address" />
										<p class="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
									</div>
								</div>
                
								<div class="flex-auto w-full mb-1 text-xs space-y-2">
									<label class="font-light text-lg text-gray-600 py-2">Description</label>
									<textarea onChange={handleOnBlur} required="required" name="description" id="" class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Enter your comapny info" spellcheck="false"></textarea>
									
								</div>

								<div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
									<button type="submit" class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Add Product</button>
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

export default AddProduct;