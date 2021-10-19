import React from 'react';
import { useParams } from 'react-router';
import UseAuthContext from '../../Hooks/UseAuthContext';

const ServicesDetail = () => {
    const { detail } = useParams() 
      return (
        <div>
       <h2>{detail}</h2>
         </div>
    );
};

export default ServicesDetail;