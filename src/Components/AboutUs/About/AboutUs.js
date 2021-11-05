import React from 'react';
import AboutInfo from '../AboutInfo/AboutInfo';
import './AboutUs.css'
const AboutUs = () => {
    return (
         <>
         {/* this is our about router */}
         <div className="row mt-5">
              <div className="col-lg-12 about-bg">
                 <p className="fs-4">Pages</p>
                  <h1 className="fw-bolder">GENERAL INFO</h1>
             </div>
         </div>
         <AboutInfo></AboutInfo>
         </>
    );
};

export default AboutUs;