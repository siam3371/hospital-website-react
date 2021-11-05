import React from 'react';
   import './ServicesItem.css'
  import { useHistory } from 'react-router';

const ServicesItem = (props) => {  
  const history = useHistory();
   
  const handleDetails = (key) => {
          const uri = `/services/${key}`;
         console.log(uri)
         history.push(uri) 
 } 
         return ( 
      <> 
      <div>
        {/* services item showing */}
      <div className="shadow-lg p-2 mb-5 bg-body rounded w-100 h-100">
      <img className="w-100" src={props.img} alt="" />
      <h3>{props.name}</h3>
    <p>{props.describe}</p> 
     <button className="btn-regular" onClick={() => handleDetails(props.id)}>Add Details</button> 
    </div> 
        </div>
      </>
    
    );
};

export default ServicesItem;