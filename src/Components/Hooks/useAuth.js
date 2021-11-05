 import { useEffect, useState } from 'react';
 import { getAuth, createUserWithEmailAndPassword, signInWithPopup,GoogleAuthProvider, sendEmailVerification,signOut ,onAuthStateChanged, updateProfile  } from "firebase/auth";
import initializeAuthentication from '../../Firebase/Firebase.confing'; 
initializeAuthentication()
 const useAuth = () => {  

  //  this is services data 
   const [services, setServices] = useState([])
   const [isLoading, setLoading] = useState(true);
   const [user, setUser] = useState({}) 
  // google login

   // fake data loading
   const googleProvider = new GoogleAuthProvider();   
   useEffect(()=> {
       setLoading(true);
       fetch('../services.json')
       .then(res=> res.json())
       .then(data => setServices(data))
       .finally(() => setLoading(false));
   },[]) 
//    using firebase
   const [error, setError] = useState('') 
     const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [name, setName] = useState('') 
    // google register

  const auth = getAuth(); 

   const handleEmail = (e) => {
      setEmail(e.target.value) 
  } 
  const handlePassword = (e) => {
      setPassword(e.target.value)
  } 

   const googleSingIn = () =>   {
    return  signInWithPopup(auth, googleProvider) 
    } 
  // end google login
  const handleName = (e) => {
    setName(e.target.value) 
  }
 const setUserName = () => {
  updateProfile(auth.currentUser, {
    displayName: name,   
  })
  .then(() => {})
 } 
 const verifyEmail = () => {
  sendEmailVerification(auth.currentUser)
.then(result => {
  console.log(result)
})
 }
//   handle email and password
      const handleEmailAndPassword = (e) => {
         e.preventDefault(); 
          if(password.length > 6){
            setError('')
          }
         if(password.length < 6){
            setError('password must be 6 character')
            return;
         }
         createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
     const user = result.user;
     setUser(user)
     console.log(user)
     setUserName();
      verifyEmail();
   })
  .catch((error) => {
      setError(error.message);
      return;
   }); 
    }
   useEffect(()=> {
     const unsubscribed = onAuthStateChanged(auth,  user => {
       if(user){
         setUser(user)
       }
       else{
         setUser({})
       }
       setLoading(false) 
     })
     return (() =>unsubscribed   )
   },[])
  //  log out
    const logOut = () => {
      setLoading(true)
      signOut(auth).then(() => { })
      .finally(()=> setLoading(false))
    }
  
// return the useAuth
      return  {handleEmail, handlePassword, handleEmailAndPassword, logOut, setLoading ,handleName,verifyEmail, user,email, error ,services,
         isLoading, googleSingIn , setUser }
 };
 
 export default useAuth;