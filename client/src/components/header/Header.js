import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { ME_CLIENT } from '../../utils/queries';
import { ME_SUPPLIER } from '../../utils/queries';
import { useQuery } from '@apollo/client';


export default function Header() {

    const client = useQuery(ME_CLIENT);
    const supplier = useQuery(ME_SUPPLIER);

    //variables to get the object when client or supplier log in
    let clientInfo;
    let supplierInfo;

    //load the client object
    if (!client.loading) {
        clientInfo = client.data;
        console.log("client", clientInfo);
    } else {
        return <h2>Loading...</h2>
    }

    //load the supplier objet
    if (!supplier.loading) {
        supplierInfo = supplier.data;
        console.log("supplier", supplierInfo);
    } else {
        return <h2>Loading...</h2>
    }



    return (

        <header className='row'>
            <nav id='nav' className='navbar navbar-expand-sm fixed-top justify-content-center'>
                <div className='container row d-flex flex-wrap g-0 px-4'>  {/* <!--div centrado centrar contenido dentro --> */}
                    <div className='col-3 d-flex justify-content-center'>
                        {/* <!--LOGO Tenner--> */}
                        <a href="/" id="logo-tenner" className="navbar-links fs-1 fw-bold text-center ">Tenner</a>
                    </div>

                    {/* <!--Button to collapse navbar--> */}
                    <button
                        className='navbar-toggler button-collapse col-2'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbar-container'
                        aria-controls='navbar-container'
                        aria-expanded='false'
                        aria-label='show / hide navbar-container'
                    >
                        <span className='navbar-toggler-icon button-collapse'></span>
                    </button>


                    {/* <!--Navbar--> */}
                    <div className='col-7 p-2 mt-3 row  collapse navbar-collapse' id='navbar-container'>
                        <ul className='d-flex flex-wrap justify-content-end navbar-nav fs-3 text-center'>
                            <li className='nav-item'><Link to='/' className='navbar-links nav-link fs-4'>Home</Link></li>
                            {Auth.loggedIn() ? (
                                <>
                                    {/* if loggedIn as a client render the link for the client if not render the links for the supplier */}
                                    {clientInfo.meClient === null ? (
                                        <li className='nav-item'><Link to='/developer/dashboard' className='navbar-links nav-link fs-4'>Dashboard</Link></li>        
                                        ) : (
                                        <li className='nav-item'><Link to='/suppliers' className='navbar-links nav-link fs-4'>Suppliers</Link></li>
                                    )}
                                    <li className='nav-item'><Link to='/' onClick={Auth.logout} className='navbar-links nav-link fs-4'>Log Out</Link></li>
                                    <li className='nav-item'><Link to='/chat' className='navbar-links nav-link fs-4'>Chat</Link></li>
                                </>
                            ) : (
                                <>
                                    <li className='nav-item'><Link to='/login' className='navbar-links nav-link fs-4'>Login</Link></li>
                                    <li className='nav-item'><Link to='/signup' className='navbar-links nav-link fs-4'>Sign Up</Link></li>
                                </>
                            )}
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

