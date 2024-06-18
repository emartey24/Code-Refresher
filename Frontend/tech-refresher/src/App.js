import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbarcomponent from './Components/Navbarcomponent';
import HowtoPlay from './Components/HowtoPlay';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Donate from './Components/Donate';
import Game from './Components/Game';
import RegisterPage from './Components/RegisterPage';

function App() {
  const handleLogin = () => {
    // Perform any additional login logic here if needed
    // Navigate to the game page after login
    console.log('Login successful');
    // Replace with your navigation logic after login
    // For example:
    // navigate('/game');
  };

  return (
    <div>
      <BrowserRouter>
        <Navbarcomponent />
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="home" element={<Home />} />
          <Route path="howtoplay" element={<HowtoPlay />} />
          <Route
            path="login"
            element={<LogIn onLogin={handleLogin} />}
          />
          <Route path="shop" element={<Donate />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

