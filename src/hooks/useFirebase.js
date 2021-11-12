import { useEffect, useState } from 'react';
import initializeFirebase from '../Components/Login/Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider ,updateProfile } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth(); 
  const googleProvider = new GoogleAuthProvider();
  const registerUser = (email, password, history, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setAuthError('')
      const newUser = {email, displayName: name};
      setUser(newUser)
      updateProfile(auth.currentUser, {
  displayName: name, photoURL: "https://www.csslight.com/application/upload/ProfilePhoto/default-image-01.png"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
      history.replace('/');
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
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    setAuthError('')
    const user = result.user;
    // ...
  }).catch((error) => {
    const errorMessage = error.message;
    setAuthError(errorMessage)
    // ...
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
    authError,
    signInWithGoogle
  }
}

export default useFirebase;