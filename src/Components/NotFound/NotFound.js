import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            {/* not found pages */}
            <img className="img-fluid" src="https://api.time.com/wp-content/uploads/2014/10/tripomatic.png" alt="" />
            <div className="text-center mt-3">
<NavLink to="/home"><button className=" btn btn-danger">Go Back</button>
</NavLink>
            </div>
         </div>
    );
};

export default NotFound;