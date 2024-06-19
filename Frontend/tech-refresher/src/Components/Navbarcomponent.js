import React from 'react'
import { Outlet, Link } from "react-router-dom";


const Navbarcomponent = () => {
    return (
      <>
        <ul >
           {/* <li><a><Link to="/">Register here</Link></a></li>  */}
           <li><a><Link to="/home">Home Page</Link></a></li> 
           <li><a><Link to="/studyguide">Self Study Guide</Link></a></li> 
           {/* <li><a><Link to="/login">Log In</Link></a></li>  */}
           <li><a><Link to="/flashcards">Flashcards</Link></a></li> 
           <li><a><Link to="/Shop">Shop</Link></a></li> 
        </ul>
        <Outlet />
      </>
    )
  };
  
  export default Navbarcomponent;