import React from 'react';
import Bannar from '../Bannar/Bannar';
 import './Home.css'
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            {/* website home page */}
           <Bannar></Bannar>
          <Services></Services>
        </div>
    );
};

export default Home;