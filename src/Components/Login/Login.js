import React from 'react';
import { Link } from 'react-router-dom';
import UseAuthContext from '../Hooks/UseAuthContext';
import { useHistory, useLocation } from 'react-router-dom';

 const Login = () => {
  const history = useHistory()
  const location = useLocation()
  const url = location.state?.from || "/home";  
    const { handleEmail, handlePassword, handleEmailAndPassword, error,setLoading, googleSingIn, setUser} = UseAuthContext();
    const handleButtonClick = () => {
      googleSingIn()
      .then((result )=> {
        setLoading(true)
       setUser(result.user) 
           history.push(url) 
}) 
     .catch(error =>console.log(error.massage))
     .finally(() => {setLoading(false)})
    } 
   return (
    <div>
      <div className="container">
        {/* ternary operator */}
        <form onSubmit={handleEmailAndPassword}>
          <h1>Please Login</h1>
          <div className="row mb-3">
            {/*  */}
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" onBlur={handleEmail} className="form-control w-50" id="inputEmail3" placeholder="Enter Your Email" required />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" onBlur={handlePassword} className="form-control w-50" id="inputPassword3" placeholder="Enter Your Password" required />
            </div>
          </div>
          <p className="text-danger">{error}</p>
          <button type="submit" className="btn btn-primary d-inline ">Login</button>
          <Link to="/register"> <p><u>Are New User?</u></p></Link> 
        </form> 
        {/* google login button */}
        <div className="text-center">
          <button className="w-25 btn btn-warning" onClick={handleButtonClick} >Google Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
