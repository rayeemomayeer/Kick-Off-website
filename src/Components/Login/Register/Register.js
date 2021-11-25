import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  const {user,registerUser , isLoading,authError,signInWithGoogle, signInWithGithub,signInWithFacebook} = useAuth();
  const [loginData, setLoginData] = useState({})
  const history = useHistory();
  const location = useLocation()
  const  handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  }
  const  handleGithubSignIn = () => {
    signInWithGithub(location, history);
  }
  const  handleFacebookSignIn = () => {
    signInWithFacebook(location, history);
  }
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
    swal({
    title: "Verify Email !",
    text: `an email has been send to ${loginData.email}, please verify your email`,
    icon: "info",
    button: "ok",
  });
    registerUser(loginData.email, loginData.password,loginData.name, history)
    e.preventDefault();
  }
  return (
    <div className="md:px-28 md:py-20 bg-gradient-to-l from-green-800 to-gray-800">
      
      {/* component */}
<section className="flex bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto ">
  <div className="hidden lg:block lg:w-1/2 bg-cover"><img src="https://source.unsplash.com/1600x900/?football,soccer,football-boots" alt className="w-full h-full object-cover filter brightness-50" /></div>
  {
    isLoading && <CircularProgress />
  }
  {!isLoading && <div className="bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-full px-6 lg:px-16 xl:px-12 w-full p-8 lg:w-1/2
  flex items-center justify-center">
    <div className="w-full h-100">
      
  
      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create an Account</h1>
      <form className="mt-6" onSubmit={handleLoginSubmit}>
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" name="name" onBlur={handleOnBlur} id placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoComplete="none" autoFocus="true" required />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Email Address</label>
          <input type="email" name="email" onBlur={handleOnBlur}  placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autoComplete="none" required />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="password" onBlur={handleOnBlur}  placeholder="Enter Password" minLength={6} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none" required  autoComplete="none"/>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input type="password" name="password2" onBlur={handleOnBlur} id placeholder="Retype Your Password" minLength={6} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none" required autoComplete="none" />
        </div>
        <div className="mt-4">
          {authError && <Alert severity="error">{authError}</Alert>}
        </div>
        {user?.email && <Alert severity="success" className="mt-3">User Created Successfully</Alert>}
        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6">Register</button>

      </form>  
      <hr className="my-6 border-gray-300 w-full" />

      <button type="button" onClick={handleGoogleSignIn} className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
        <div className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
          <span className="ml-4">
            Sign Up
            with
            Google</span>
        </div>
      </button>   

      <div className="flex flex-col md:flex-row md:mt-2 mt-2">
          <button type="button" onClick={handleFacebookSignIn} className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300">
          <div className="flex items-center justify-center">
            <i class="fab fa-facebook text-blue-600 text-2xl"></i>
            <span className="ml-2">
                            facebook</span>
          </div>
        </button>
          <button type="button" onClick={handleGithubSignIn} className="w-full block bg-white md:mt-0 mt-2 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 md:ml-2 py-2 border border-gray-300">
          <div className="flex items-center justify-center">
            <i class="fab fa-github text-gray-800 text-2xl"></i>
            <span className="ml-4">
                            Github</span>
          </div>
        </button>
      </div>   


      <Link to="/login"><button className="mt-8">Already Register? <span className="text-blue-500 hover:text-blue-700 font-semibold">Please Login</span></button></Link>
      
    </div>
  </div>}
  
</section>
    </div>
  );
};

export default Register;