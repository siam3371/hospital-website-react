import React from 'react';
import { Link } from 'react-router-dom';
import UseAuthContext from '../Hooks/UseAuthContext';

const Register = () => {
    const {handleEmail, handlePassword, handleEmailAndPassword,  error,    handleName} = UseAuthContext()
    return (
        <div className="text-center">
               <form onSubmit={handleEmailAndPassword}>
                       <h2 className="m-3 text-success">Please Register</h2> 
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
                <Link to="/login"> <p><u>already Have an account?</u></p></Link>

              </form>
        </div>
    );
};

export default Register;