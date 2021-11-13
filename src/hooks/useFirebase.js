import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeFirebase from '../Components/Login/Firebase/firebase.init';

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false)
  const [token, setToken] = useState('')

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
      saveUser(email, name, 'POST')
      updateProfile(auth.currentUser, {
  displayName: name
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
      const user = userCredential.user;
      setAuthError('')
      const destination = location?.state?.from || '/';
      history.replace(destination)
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
  const saveUser = (email, displayName, method) => {
    const user = {email, displayName}
    fetch('https://whispering-island-81161.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then()
  }
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    setAuthError('')
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT')
    const destination = location?.state?.from || '/';
      history.replace(destination)
    // ...
  }).catch((error) => {
    const errorMessage = error.message;
    setAuthError(errorMessage)
    // ...
  }).finally(()=>setIsLoading(false));
  }
  useEffect(()=>{
    fetch(`https://whispering-island-81161.herokuapp.com/users/${user.email}`)
    .then(res=>res.json())
    .then(data=> setAdmin(data.admin))
  }, [user.email])

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user);
    getIdToken(user)
    .then(idToken=>{
      setToken(idToken)
    })
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
    signInWithGoogle,
    admin,
    token
  }
}

export default useFirebase;