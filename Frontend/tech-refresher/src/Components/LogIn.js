import React from 'react'
import '../LogIn.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";



const LogIn = ()=> {
  return (
    <div class="loginBody">
            <form className="wrapper"action="">
              <h1>Login</h1>
              <div className='input-box'>
                <input type="text" placeholder='Username here' required></input>
                <FaUser className='icon' />
              </div>
              <div className='input-box'>
                <input type="password" placeholder='Password here' required></input>
                <FaLock className='icon'/>
              </div>
              
              {/* <div className="remember-forgot">
                <label><input type="checkout" />Remember me</label>
                <a href='#'>Forgot Password</a>
              </div> */}


               <button type="submit">Login</button>

                  <div className='register-link'>
                    <p>Don't have an account? <a href="#">Register</a></p>
                  </div>


                   </form>


    </div>
  )
}

export default LogIn