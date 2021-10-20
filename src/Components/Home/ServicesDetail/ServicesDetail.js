import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuthContext from '../../Hooks/UseAuthContext';
import './ServicesDetail.css'
const ServicesDetail = () => {
  const {services, isLoading} = UseAuthContext();
  const {detail} = useParams();
  const details = services.filter(service=> service.id === parseInt(detail))[0];
  console.log(details, isLoading);
  if(isLoading){
    return <Spinner animation="border" variant="primary" />
}
  return (
    <div className="text-center">
      <div className="card">
  <img src={details.img} className="card-img-top  w-50 img-size" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{details.name}</h5>
    <p className="card-text">{details.describe}</p>
     <Link to="/home"> <button className="btn-regular">Go Back</button> </Link>
   </div>
</div>
    </div>
  );
};

export default ServicesDetail;