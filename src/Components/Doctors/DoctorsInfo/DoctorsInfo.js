import React from 'react';
import './DoctorsInfo.css'
const DoctorsInfo = (props) => {
    const {name, img, describe, email } = props.doctor

      return (
    <> 
         <div className=""> 
         {/* using bootstrap card */}
          <div className="card" > 
            <div>
            <img src={img}  className="w-25 card-img-top text-center" alt="..."/> 
            </div>
  <div className="card-body">
    <h2>{name}</h2>
    <p>{describe}</p>
    <p>{email}</p>  <p className="ms-5 text-center"> <i class="fab fa-facebook icon-doctor mt-0"></i>
        <i class="fab fa-twitter icon-doctor"></i>
        <i class="fab fa-instagram icon-doctor"></i>
        <i class="fab fa-google-plus-g icon-doctor"></i></p>
   </div>
</div>
            </div></>
    );
};
 export default DoctorsInfo;