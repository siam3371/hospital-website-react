import React, { } from 'react'; 
 import UseAuthContext from '../Hooks/UseAuthContext';
  const Login = () => { 
    // using destructuring  
      const {handleEmail, handlePassword, handleEmailAndPassword,  googleSingIn, error, user,  handleName} =  UseAuthContext() ;  
     return (
        <div>
            <div className="container"> 
            {/* ternary operator */}
            {
              user.email ?            <form onSubmit={handleEmailAndPassword}>
              <h1>Please Login</h1> 
<div className="row mb-3">
{/*  */}
<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
<div className="col-sm-10">
<input type="email" onBlur={handleEmail} className="form-control w-50" id="inputEmail3" placeholder="Enter Your Email" required/>
</div>
</div>
<div className="row mb-3">
<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
<div className="col-sm-10">
<input type="password" onBlur={handlePassword} className="form-control w-50" id="inputPassword3" placeholder="Enter Your Password" required/>
</div>
</div>  
<p className="text-danger">{error}</p>
<button type="submit" className="btn btn-primary">Login</button>   
</form>   :   <form onSubmit={handleEmailAndPassword}>
                       <h1>Please Register</h1> 
              <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
<div className="col-sm-10">
<input type="Text" onBlur={handleName}  className="form-control w-50 mb-3" id="inputEmail3" placeholder="Your Name" required />
</div>
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" placeholder="Enter Your Email">Email</label>
                <div className="col-sm-10">
                  <input type="email" onBlur={handleEmail} className="form-control w-50" id="inputEmail3" placeholder="Enter Your Email" required/>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" onBlur={handlePassword} className="form-control w-50" id="inputPassword3" placeholder="Enter Your Password"required/>
                </div>
              </div>  
              <p className="text-danger">{error}</p>
                <button type="submit" className="btn btn-primary">Register</button>   
              </form>

           }
   
{/* google login button */}
  <div className="text-center">
  <div className="w-25 btn btn-warning" onClick={ googleSingIn} >Google Sign In</div>
  </div>
        </div>
        </div>
    );
};

export default Login;
 