import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut ,signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialized";

initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('')
  const [admin, setAdmin] = useState(false);
  
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //Register New User
  const registerUser = (email,password,name, history) =>{
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         setAuthError('');
         const newUser = {email, displayName: name};
         setUser(newUser)
          // save user to the database
          saveUser(email, name, 'POST');

         // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
          });
          history.replace('/');
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(()=> setIsLoading(false));
        
      }
    
  // Login Email and Password
  const loginUser = (email, password, location, history) =>{
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
          const destination = location?.state?.from || '/';
          history.replace(destination)
          setAuthError('');
  })
  .catch((error) => {
          setAuthError(error.message)
  })
  .finally(() => setIsLoading(false));
}
      

  //Google Sign In
  const signInUsingGoogle = ()=>{
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
    .then((result)=> {
      // save user to the database
      const user = result.user;
      saveUser(user.email, user.displayName, 'PUT')

      setAuthError('');
    })
    .catch((error) => {
      setAuthError(error.message)
  })
  .finally(() => setIsLoading(false));
  }

  // Log Out
  const logOut = () =>{
    setIsLoading(true);
      signOut(auth)
      .then(()=>{
          setUser({})
      })
      .catch((error) => {
        // An error happened.
    })
        .finally(() => setIsLoading(false));
  }

  // Ovserve user state
  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        }
        else{
          setUser({})
        }
        setIsLoading(false);
      });
      return () => unsubscribed;
  },[auth])
  
  //save user in mongodb
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
        fetch('https://radiant-escarpment-35007.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
  }

  //Check Admin
  useEffect(()=>{
    fetch(`https://radiant-escarpment-35007.herokuapp.com/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  },[user.email])

  return{
      user,
      admin,
      isLoading,
      authError,
      registerUser,
      loginUser,
      signInUsingGoogle,
      logOut,
  }
}

export default useFirebase;