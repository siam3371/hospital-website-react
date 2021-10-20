import React from 'react';
 import { Redirect, Route } from 'react-router';
 import UseAuthContext from '../Hooks/UseAuthContext';

const PrivateRoute = ({children, ...rest }) => {
     const {email, } = UseAuthContext()  
     return ( 
        <div>
             <Route
      {...rest}
      render={({ location }) =>
        email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;