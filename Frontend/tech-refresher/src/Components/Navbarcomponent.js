import React from 'react'
import { Outlet, Link } from "react-router-dom";
// import '../Navbar.css';





const Navbarcomponent = () => {
    return (
      <>
        <ul >
           <li><a><Link to="/">Home</Link></a></li> 
           <li><a><Link to="/howtoplay">How to Play</Link></a></li> 
           <li><a><Link to="/login">Log In</Link></a></li> 
           <li><a><Link to="/Donate">Donate</Link></a></li> 
        </ul>
        <Outlet />
      </>
    )
  };
  
  export default Navbarcomponent;