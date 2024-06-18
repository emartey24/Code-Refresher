import React, { useState } from 'react';
import '../LogIn.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  // storing the data for email and password once it's properly inputted 
  const handleRegister = () => {
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (email.trim() === '') {
      setEmailError('Please enter your email');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    if (password.trim() === '') {
      setPasswordError('Please enter a password');
      return;
    }
    if (password.length < 8) {
      setPasswordError('The password must be 8 characters or longer');
      return;
    }

    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Please confirm your password');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

   
    console.log('Registration successful');

    // Navigate to the login page after successful registration
    navigate('/login');
  };

  return (
    <div className="loginBody">
      <form className="wrapper" action="">
        <h1>Register</h1>
        <div className="input-box">
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className="inputBox"
          />
          <FaUser className="icon" />
          <label className="errorLabel">{emailError}</label>
        </div>
        <div className="input-box">
          <input
            value={password}
            type="password"
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className="inputBox"
          />
          <FaLock className="icon" />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <div className="input-box">
          <input
            value={confirmPassword}
            type="password"
            placeholder="Confirm your password"
            onChange={(ev) => setConfirmPassword(ev.target.value)}
            className="inputBox"
          />
          <FaLock className="icon" />
          <label className="errorLabel">{confirmPasswordError}</label>
        </div>

        <button type="button" onClick={handleRegister}>
          Register
        </button>

        <div className="login-link">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
