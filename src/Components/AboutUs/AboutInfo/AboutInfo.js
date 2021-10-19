import React from 'react';
import AboutOwner from '../AboutOwner/AboutOwner';
import './AboutInfo.css'
const AboutInfo = () => {
    return (
        // show for about part
<> 
<div className="container mt-5">
            <h4>
What we stand for</h4>
 <hr className="horizontal-line" />
 <h1 className="fw-bold">OUR VALUES</h1>
 {/* show to our values start*/}
 <div className="row">
     <div className="col-lg-4 col-md-4">
         <div className="d-flex mt-3  value-shadow">
 <div>
 <i className="fas fa-user-md font-icon me-3"></i>   
 </div>
 <div>
     <h4>DOCTOR YOU CHOOSE
</h4>
<p>noun. a person licensed to practice medicine, as a physician, surgeon, dentist, or veterinarian. a person who has been awarded a doctor's degree: He is a Doctor of Philosophy.
</p>
 </div>
         </div>
     </div>
     <div className="col-lg-4 col-md-4">     <div className="d-flex mt-3  value-shadow">
 <div>
  <i className="fab fa-gratipay font-icon me-3"></i>
 </div>
 <div>
     <h4> YOUR HEALTHCARE 
</h4>
<p>Vestibulum imperdiet vestibulum laoreet. Integer elementum euismod ante sit amet elementum.</p>
 </div>
         </div></div>
     <div className="col-lg-4 col-md-4"> 
     <div className="d-flex mt-3  value-shadow">
 <div>
  <i className="fas fa-user-shield font-icon me-3"></i>
 </div>
 <div>
     <h4> 
NURSING STAFF
</h4>
<p> Nurses have many duties, including caring for patients, com the U.S., nurses play a vital role in medical facilities and enjoy a large number of job opportunities. 
</p>
 </div>
         </div></div>
 </div>
 <div className="row">
     <div className="col-lg-4 col-md-4">
         <div className="d-flex mt-3  value-shadow">
 <div>
  <i className="fas fa-phone-square font-icon me-3"></i>   
 </div>
 <div>
     <h4> ALWAYS THERE FOR YOU 
</h4>
<p>Mauris commodo lacinia nisi a fermentum. Donec risus magna, fringilla laoreet ullamcorper in, lobortis semper enim.</p>
 </div>
         </div>
     </div>
     <div className="col-lg-4 col-md-4">     <div className="d-flex mt-3  value-shadow">
 <div>
  <i className="fas fa-ambulance font-icon me-3"></i>
 </div>
 <div>
     <h4> EMERGENCY SERVICES 
</h4>
<p>Pellentesque sagittis neque neque, ac ultrices neque tempor a. In . tellus sollicitudin eu. 
</p>
 </div>
         </div></div>
     <div className="col-lg-4 col-md-4">     <div className="d-flex mt-3  value-shadow">
 <div>
  <i className="fas fa-hospital font-icon me-3"></i>
 </div>
 <div>
     <h4> PREMIUM FACILITIES 
</h4>
<p> Most health services are found in hospitals, clinics and med mitigation of disasters because of their particular function in treating the injured and</p>
 </div>
         </div></div>
</div>
</div>
{/* our hospital owner*/}
 <AboutOwner></AboutOwner>   
        </>
    );
};

export default AboutInfo;