import React from 'react';
import { Link } from 'react-router-dom';
  import './ServicesItem.css'
const ServicesItem = (props) => {  
         return ( 
      <> 
      <div>
        {/* services item showing */}
      <div className="shadow-lg p-2 mb-5 bg-body rounded w-100 h-100">
      <img className="w-100" src={props.img} alt="" />
      <h3>{props.name}</h3>
    <p>{props.describe}</p> 
    <Link  to={`/services/${props.id}`}><button className="btn-regular">Add Details</button></Link>
    </div> 
        </div>
      </>
    
    );
};

export default ServicesItem;