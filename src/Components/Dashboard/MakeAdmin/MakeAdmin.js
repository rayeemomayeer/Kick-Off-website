import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../../hooks/useFirebase';

const MakeAdmin = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const {token} = useAuth();
  const handleOnBlur = e => {
    setEmail(e.target.value)
  }
  const handleAdminSubmit = e => {
    const user = {email};
    fetch('https://whispering-island-81161.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${token}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res=>res.json())
    .then(data=> {
      if(data.modifiedCount){
        setSuccess(true)
        setEmail('')
        toast('Made Admin Successfully', {
position: "top-right",
autoClose: 5000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
});
      }
    })
    e.preventDefault()
  }
  return (
    <div className="">
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover={false}
/>
      <form onSubmit={handleAdminSubmit} class="grid h-screen bg-gray-900 place-content-center">
              
      <h1 className="text-5xl text-green-700 text-center pb-5">Make an Admin</h1>  
    <div class="flex items-center max-w-md mx-auto bg-white rounded-full ">
        <div class="w-full">
          
            <input onBlur={handleOnBlur} type="email" class="w-full px-4 py-1 text-gray-900 rounded-full focus:outline-none"
                placeholder="enter user email" />
        </div>
        <div>
            <button type="submit" class="flex items-center justify-center w-12 h-12 text-gray-100 rounded-full"
        >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </button>
        </div>
    </div>
  </form>
    </div>
  );
};

export default MakeAdmin;