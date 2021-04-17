import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuthenticated} from '../helpers/auth';

const AdminRoute = ({ component: Component, ...rest}) => {    
    return (
        //custom route creation
        <Route 
            {...rest}
            render={(props) => 
                isAuthenticated() && isAuthenticated().role === 1 ? (
                    //custom component
                    <Component {...props}/>
                ) : (
                    <Redirect to='/signin'/>
                )
            }
        />
    );
};

export default AdminRoute;