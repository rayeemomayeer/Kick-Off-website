import { useEffect, useState } from 'react';
import initializeFirebase from '../Components/Login/Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth(); 
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setAuthError('')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setAuthError(errorMessage)
      // ..
    }).finally(()=>setIsLoading(false));
  } 
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const destination = location?.state?.from || '/';
      history.replace(destination)
      const user = userCredential.user;
      setAuthError('')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setAuthError(errorMessage)
    })
    .finally(()=>setIsLoading(false));
  }
  const logOut = () =>{
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    }).finally(()=>setIsLoading(false));
  } 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user);
  } else {
    setUser({});
  }
  setIsLoading(false);
});
return () => unsubscribe;
  }, [])

  return {
    user,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    authError
  }
}

export default useFirebase;