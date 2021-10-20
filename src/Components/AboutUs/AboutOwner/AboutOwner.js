import React from 'react';
import './AboutOwner.css'

const AboutOwner = () => {
    return (
      // using bootstrap responsive
      <div className="row owner container-fluid mt-5 p-5">
          <div className="col-lg-7 col-12 col-md-6">
          <div className="">
            <h4>Founder & Owner</h4>
             <h1 className="fw-bolder text-primary">Dr Alicia Harley
</h1>
<hr className="horizontal-line" />
 <p>After a decade of mergers and consoli- dations, at least half of California's hospitals are now affiliat- ed with multi-site hospital corporations, and six organiza- tions—Catholic Healthcare West, Tenet/OrNda, Kaiser Foundation Hospitals, Sutter Health, Columbia/HCA, and Adventist Health—operate over one-third of the ..</p>
        </div>
      <div className="fs-5">
        {/* font awsome */}
      <i className="fab fa-facebook m-2 icon"></i>
        <i className="fab fa-twitter m-2 icon"></i>
        <i className="fab fa-instagram m-2 icon"></i>
      </div>
          </div>
          <div className="col-lg-5 col-12 col-md-6 ">
               <img  className="img-fluid w-50"  src="http://medicare.bold-themes.com/general-hospital/wp-content/uploads/sites/14/2018/03/img-general-hospital-05.png" alt="" />
          </div>
      </div>
    );
};

export default AboutOwner;