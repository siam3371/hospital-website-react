import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuthContext from '../../Hooks/UseAuthContext';
import './ServicesDetail.css'
const ServicesDetail = () => {
  const {services, isLoading, setLoading} = UseAuthContext();
   const {detail} = useParams();
   const [specificDetail,setSpecificDetail] = useState({}) 
  useEffect(() =>{
  if(services.length>0){ 
      const matchedData=services.find(det=>det.id==parseInt(detail))
      setSpecificDetail(matchedData);
      setLoading(false)
        } 
  }
,[services]) 
   if(isLoading){
    return <Spinner animation="border" variant="primary" />
}
  return (
    <div className="text-center">
      <h3>{detail}</h3>
      <div className="card">
  <img src={specificDetail.img} className="card-img-top  w-50 img-size" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{specificDetail.name}</h5>
    <p className="card-text">{specificDetail.describe}</p>
     <Link to="/home"> <button className="btn-regular">Go Back</button> </Link>
   </div>
</div>
    </div>
  );
};

export default ServicesDetail;