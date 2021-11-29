import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, getIdToken, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const registerUser = (email, password, history, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setAuthError('')
      const newUser = {email, displayName: name};
      setUser(newUser)
      verifyEmail()
      const profileImg = 'https://png.pngitem.com/pimgs/s/22-223968_default-profile-picture-circle-hd-png-download.png';
      saveUser(email, name, profileImg, 'POST')
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
  const saveUser = (email, displayName,profileImg, method) => {
    const user = {email, displayName, profileImg}
    fetch('https://safe-beyond-59939.herokuapp.com/users', {
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
        saveUser(user.email, user.displayName, user.photoURL, 'PUT')
        const destination = location?.state?.from || '/';
          history.replace(destination)
        // ...
      }).catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage)
        // ...
      }).finally(()=>setIsLoading(false));
  }

  const signInWithGithub = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setAuthError('')
        const user = result.user;
        saveUser(user.email, user.displayName, user.photoURL, 'PUT')
        const destination = location?.state?.from || '/';
          history.replace(destination)
        // ...
      }).catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage)
        // ...
      }).finally(()=>setIsLoading(false));
  }

  const signInWithFacebook = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setAuthError('')
        const user = result.user;
        saveUser(user.email, user.displayName, user.photoURL, 'PUT')
        const destination = location?.state?.from || '/';
          history.replace(destination)
        // ...
      }).catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage)
        // ...
      }).finally(()=>setIsLoading(false));
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result)
      })
  }

  const handleResetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      setAuthError('')
    })
    .catch((error) => {
      const errorMessage = error.message;
      setAuthError(errorMessage)
    });
  }

  useEffect(()=>{
    fetch(`https://safe-beyond-59939.herokuapp.com/users/${user.email}`)
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
    signInWithGithub,
    signInWithFacebook,
    handleResetPassword,
    admin,
    token
  }
}

export default useFirebase;