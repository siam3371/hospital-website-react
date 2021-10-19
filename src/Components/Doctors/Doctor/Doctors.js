import React, { useEffect, useState } from 'react';
import DoctorsInfo from '../DoctorsInfo/DoctorsInfo';
import './Doctors.css'
const Doctors = () => {
    const [doctors, setDoctors] = useState([]) 
    useEffect(()=> {
        fetch('./doctors.json')
        .then(res=> res.json())
        .then(data => setDoctors(data))
    },[])
    return ( 
     <>  
     <h1 className="text-primary text-center m-5 text-bold">Our Chief Doctors
</h1> 
    <div>
        {/* our chief doctor in this website */}
    <div className="doctor-container"> 
          {
              doctors.map((doctor)=>    
                <DoctorsInfo key={doctor.id}
                doctor={doctor}
                name={doctor.name}
                 >
                 </DoctorsInfo>     

              )
          }
        </div>
    </div>
   </>
    );
};

export default Doctors;