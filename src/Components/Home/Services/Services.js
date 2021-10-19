import React, {} from 'react';
 import UseAuthContext from '../../Hooks/UseAuthContext';
  import ServicesItem from '../ServicesItem/ServicesItem';
import './Services.css'
const Services = () => { 
 const {services} = UseAuthContext();      
  
    return ( 
      //  most powerful services in our general hospital 
        <div className="services-container mt-5">
              {services.map((service) => 
                 <ServicesItem   
                 service={service}
                  key={service.id}
                  id={service.id}
                 name={service.name}
                 img={service.img}
                 describe={service.describe} 
                 ></ServicesItem> 
              )}
           </div>
    );
};

export default Services;