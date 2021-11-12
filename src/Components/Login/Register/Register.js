import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  const {user,registerUser , isLoading,authError} = useAuth();
  const [loginData, setLoginData] = useState({})
  const history = useHistory();
  
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
    if(loginData.password !== loginData.password2) {
      alert('your password did not match')
      e.preventDefault();
      return
    }
    registerUser(loginData.email, loginData.password,loginData.name, history)
    e.preventDefault();
  }
  return (
    <div className="md:px-28 md:py-20 bg-gradient-to-l from-green-800 to-gray-800">
      {/* component */}
<section className="flex bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto ">
  <div class="hidden lg:block lg:w-1/2 bg-cover"><img src="https://source.unsplash.com/1600x900/?football,soccer,football-boots" alt className="w-full h-full object-cover filter brightness-50" /></div>
  {!isLoading && <div className="bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 w-full p-8 lg:w-1/2
  flex items-center justify-center">
    <div className="w-full h-100">
      {
    isLoading && <CircularProgress />
  }
  
      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create an Account</h1>
      <form className="mt-6" onSubmit={handleLoginSubmit}>
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="name" name="name" onBlur={handleOnBlur} id placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autoComplete required />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Email Address</label>
          <input type="email" name="email" onBlur={handleOnBlur} id placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autoComplete required />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="password" onBlur={handleOnBlur} id placeholder="Enter Password" minLength={6} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none" required />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input type="password" name="password2" onBlur={handleOnBlur} id placeholder="Retype Your Password" minLength={6} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none" required />
        </div>
        <div className="mt-4">
          {authError && <Alert severity="error">{authError}</Alert>}
        </div>
        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6">Register</button>

      </form>      
      <Link to="/login"><button className="mt-8">Already Register? <span className="text-blue-500 hover:text-blue-700 font-semibold">Please Login</span></button></Link>
      {user?.email && <Alert severity="success" className="mt-3">User Created Successfully</Alert>}
    </div>
  </div>}
  
</section>
    </div>
  );
};

export default Register;