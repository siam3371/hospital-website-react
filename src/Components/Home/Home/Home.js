import React from 'react';
import Bannar from '../Bannar/Bannar';
 import './Home.css'
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            {/* website home page */}
            <h1 className="hospital-header text-center">Welcome to our general hospital</h1>
          <Bannar></Bannar>
          <Services></Services>
        </div>
    );
};

export default Home;