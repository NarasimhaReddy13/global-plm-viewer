import React from 'react'
import './Navbar.css'
import Sidebar1 from './Sidebar1'
import CopyRight from './CopyRight'


function Navbar() {
    return(
        <>
            <div className='main-container'>
                <nav className="navbar-container">
                    <h1 className="navbar-title"> Global PLM Document Web Viewer </h1>
                    <ul className="navbar-links">
                        <li> <a href="www.google.com" className="welcome-text" target='_blank'> Welcome: A72MRZZ </a></li> | 
                        <li> <a href="www.google.com" className='contact-text'> Contact Us </a></li> | 
                        <li> <a href="www.google.com" className='contact-text'> Log Off </a></li>
                    </ul>
                </nav>
                <Sidebar1/>
                <CopyRight/>
            </div>
        </>
    )
}
export default Navbar

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.