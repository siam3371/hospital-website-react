 import { useEffect, useState } from 'react';
 
 const UseData = () => {
    const [services, setServices] = useState([])
    // fake data loading
    useEffect(()=> {
        fetch('./services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])

     return {services};
      
 };
 
 export default UseData;