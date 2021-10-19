 import React, {  createContext } from 'react';
 import UseData from '../Context/UseData.js'
//  react router create context
export const AuthContext = createContext();

 const AuthProvider = ({children}) => {
 const allContext = UseData() 
      return ( 
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    
     );
 };
 
 export default AuthProvider;