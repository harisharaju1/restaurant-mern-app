import React, {Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom';
//withRouter has access to the history object
//we're using this so that the Header changes as 
//and when the user signs in or signs out 
import {isAuthenticated, logout} from '../helpers/auth';

const Header = ({history}) => {

    const handleLogout = (evt) => {
        logout(() => {
            history.push('/signin');
        });
    };

    //views
    const showNavigation = () => {        
        return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <Link to='/' className='navbar-brand' id='infosection'>
                <i className="fas fa-gem" aria-hidden="true" id='infosection'></i> DiamondLane
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {!isAuthenticated() && (
                        <Fragment>
                           <li className="nav-item">
                                <Link to='/' className="nav-link" id='infosection'><i className="fas fa-home" id='infosection'></i> Home</Link>
                            </li>  
                            <li className="nav-item">
                                <Link to='/signup' className="nav-link" id='infosection'><i className='fas fa-edit' id='infosection'></i> SignUp</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/signin' className="nav-link" id='infosection'><i className='fas fa-sign-in-alt' id='infosection'></i> SignIn</Link>
                            </li>   
                        </Fragment>
                    )}

                    {isAuthenticated() && isAuthenticated().role === 0 && (
                        <Fragment>
                           <li className="nav-item">
                                <Link to='/user/dashboard' className="nav-link" id='infosection'><i className='fas fa-home' id='infosection'></i> Dashboard</Link>
                            </li>                 
                        </Fragment>
                    )}

                    {isAuthenticated() && isAuthenticated().role === 1 && (
                        <Fragment>
                           <li className="nav-item">
                                <Link to='/admin/dashboard' className="nav-link" id='infosection'><i className='fas fa-home' id='infosection'></i>  Dashboard</Link>
                            </li>                               
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                        <Fragment>
                           <li className="nav-item">
                               <button className="btn btn-link text-secondary text-decoration-none pl-0" onClick={handleLogout}><i className='fas fa-sign-out-alt'></i> Logout</button>
                            </li>                 
                        </Fragment>
                    )}
                                                     
                </ul>                    
            </div>
        </nav>
        )
    };

    //renders the View
    return(
        <header id='header'>
            { showNavigation() }
        </header>
    );
};

export default withRouter(Header);